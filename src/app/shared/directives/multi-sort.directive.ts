import { Directive, ElementRef, HostListener, HostBinding, Input, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IColumn } from '../components/prime-grid/prime-grid.component';
import { IEmployees } from '../components/prime-grid/employees';

@Directive({
  selector: '[appMultiSort]'
})
export class MultiSortDirective implements AfterViewInit {

  @Input() columns: IColumn[] = [];

  activeSortCol: IColumn;

  @Input() dataSource: IEmployees[] = [];

  sortMultipleList: Map<string, IColumn> = new Map();

  constructor(private element: ElementRef) {

  };

  ngAfterViewInit(): void {
    this.setSortDirectionProp();
  };

  @HostListener('click', ['$event.target']) click(event: Event) {

    const columnName: string = event['textContent'].trim();

    this.activeSortCol = this.columns.find(col => col.header === columnName);

    this.sortMultipleList.set(columnName, this.activeSortCol);
    if (this.sortMultipleList.size > 2) {
      const k = Array.from(this.sortMultipleList.keys());
      this.sortMultipleList.delete(k[0]);
    }

    console.log(this.sortMultipleList);

    if (this.sortMultipleList.size === 1) {
      this.sort(this.activeSortCol);
    } else {
      switch (this.activeSortCol.direction) {
        case 'asc':
          this.activeSortCol = Object.assign(this.activeSortCol, { direction: 'dsc' });
          this.sortMultiple();
          return;
        case 'dsc':
          this.activeSortCol = Object.assign(this.activeSortCol, { direction: 'asc' });
          this.sortMultiple();
          return;
        default:
          this.activeSortCol = Object.assign(this.activeSortCol, { direction: 'asc' });
          this.sortMultiple();
          return;
      };
    }

  };

  sortMultiple() {
    if (this.activeSortCol.direction === 'asc') {
      this.mAsc();
    } else {
      this.mDsc();
    }
  };

  mAsc() {
    const keys: string[] = Array.from(this.sortMultipleList.keys());
    keys.map((key, index) => {
      const col: IColumn = this.sortMultipleList.get(key);
      const d = this.dataSource;
      d.sort((a, b) => {
        if (index > 0) {
          if (a[col.field] > b[col.field]) {
            debugger
            if (a[keys[index - 1].toLowerCase()] > b[keys[index - 1].toLowerCase()]) {
              debugger
              return 1;
            } else if (a[keys[index - 1].toLowerCase()] < b[keys[index - 1].toLowerCase()]) {
              debugger;
              return -1;
            }
            debugger;
            return 1;
          } else if (a[col.field] < b[col.field]) {
            if (a[keys[index - 1].toLowerCase()] < b[keys[index - 1].toLowerCase()]) {
              debugger
              return -1;
            } else if (a[keys[index - 1].toLowerCase()] > b[keys[index - 1].toLowerCase()]) {
              debugger;
              return 1;
            }
            debugger
            return -1;
          }
        }
      });
    });
  }
  mDsc() {
    const keys: string[] = Array.from(this.sortMultipleList.keys());
    keys.map((key, index) => {
      const col: IColumn = this.sortMultipleList.get(key);
      const d = this.dataSource;
      d.sort((a, b) => {
        if (index > 0) {
          if (a[col.field] < b[col.field]) {
            debugger
            if (a[keys[index - 1].toLowerCase()] < b[keys[index - 1].toLowerCase()]) {
              debugger
              return 1;
            } else if (a[keys[index - 1].toLowerCase()] > b[keys[index - 1].toLowerCase()]) {
              debugger;
              return -1;
            }
            debugger;
            return 1;
          } 
          else if (a[col.field] > b[col.field]) {
            if (a[keys[index - 1].toLowerCase()] > b[keys[index - 1].toLowerCase()]) {
              debugger
              return -1;
            } else if (a[keys[index - 1].toLowerCase()] < b[keys[index - 1].toLowerCase()]) {
              debugger;
              return 1;
            }
            debugger
            return -1;
          }
        }
      });
    });
  }


  sort(col: IColumn) {
    switch (col.direction) {
      case 'asc':
        col = Object.assign(col, { direction: 'dsc' });
        this.dataSource = this.dsc(this.dataSource, col);
        console.log('asc: ', this.dataSource)
        return;
      case 'dsc':
        col = Object.assign(col, { direction: 'asc' });
        this.dataSource = this.asc(this.dataSource, col);
        console.log('dsc: ', this.dataSource)
        return;
      default:
        col = Object.assign(col, { direction: 'asc' });
        this.dataSource = this.asc(this.dataSource, col);
        console.log('default asc: ', this.dataSource)
        return;
    };
  };

  asc(dataSource: any[], col: IColumn): IEmployees[] {
    return dataSource.sort((a, b) => {
      if (a[col.field] > b[col.field]) {
        return 1;
      }
      if (a[col.field] < b[col.field]) {
        return -1;
      }
      if (a[col.field] === b[col.field]) {
        return 0;
      }
    });
  };

  dsc(dataSource: any[], col: IColumn): IEmployees[] {
    return dataSource.sort((a, b) => {
      if (a[col.field] < b[col.field]) {
        return 1;
      }
      if (a[col.field] > b[col.field]) {
        return -1;
      }
      if (a[col.field] === b[col.field]) {
        return 0;
      }
    });
  };


  setSortDirectionProp() {
    this.columns = this.columns.map(col => {
      return col = Object.assign(col, { direction: 'null' });
    });
  };

}




// keys.map((key, index) => {
//   const col: IColumn = this.sortMultipleList.get(key);
//   const d = this.dataSource;
//   d.sort((a, b) => {
//     console.log(a[col.field])
//     if (index > 0) {
//       // if (a[col.field] > b[col.field]) {
//       //   debugger
//       //   if (a[keys[index - 1].toLowerCase()] > b[keys[index - 1].toLowerCase()]) {
//       //     debugger
//       //     return 1;
//       //   }
//       //   return 1;
//       // } else if (a[col.field] < b[col.field]) {
//       //   if (a[keys[index - 1].toLowerCase()] < b[keys[index - 1].toLowerCase()]) {
//       //     debugger
//       //     return -1;
//       //   }
//       //   debugger
//       //   // return -1;
//       // }
//       // else if (a[col.field] === b[col.field]) {
//       //   if (a[keys[index - 1].toLowerCase()] > b[keys[index - 1].toLowerCase()]) {
//       //     debugger
//       //     return 1;
//       //   }
//       //   if (a[keys[index - 1].toLowerCase()] < b[keys[index - 1].toLowerCase()]) {
//       //     debugger
//       //     return -1;
//       //   }
//       //   debugger;
//       //   return 0;
//       // }
//       // else {
//       //   debugger
//       //   return 0;
//       // }

//       // if (a[col.field] > b[col.field] &&
//       //   a[keys[index - 1].toLowerCase()] > b[keys[index - 1].toLowerCase()]) {
//       //   debugger
//       //   return 1;
//       // } else if (a[col.field] < b[col.field] &&
//       //   a[keys[index - 1].toLowerCase()] < b[keys[index - 1].toLowerCase()]) {
//       //   debugger
//       //   return -1;
//       // } else {
//       //   debugger
//       //   return 0;
//       // }
//     } else {
//       if (a[col.field] > b[col.field]) {
//         return 1;
//       } else if (a[col.field] < b[col.field]) {
//         return -1;
//       } else {
//         return 0;
//       }
//     }

//   });
// });