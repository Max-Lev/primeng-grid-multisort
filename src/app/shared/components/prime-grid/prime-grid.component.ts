import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { IEmployees, employees } from './employees';
import { MultiSortDirective } from '../../directives/multi-sort.directive';

export interface IColumn {
  field: string;
  header: string;
  direction?: string;
}

@Component({
  selector: 'app-prime-grid',
  templateUrl: './prime-grid.component.html',
  styleUrls: ['./prime-grid.component.scss']
})
export class PrimeGridComponent implements OnInit, AfterViewInit {

  columns: IColumn[] = [];

  employees: IEmployees[] = employees;

  constructor() {
    this.columns = [
      { field: 'name', header: 'Name' },
      { field: 'location', header: 'Location' },
      { field: 'age', header: 'Age' },
      { field: 'gender', header: 'Gender' }
    ];
  }

  employeesContext: any = { $implicit: this.employees };

  clientsContext: any = { $implicit: [{ name: 'Nike' }, { name: 'Airbus' }] };

  contextManager: any = this.employeesContext;

  ngOnInit() {

  };

  @ViewChild(MultiSortDirective) multiSortDirective: MultiSortDirective;

  ngAfterViewInit(): void {

  };

  // templateOutRef
  switchTemplate() {
    this.contextManager = this.clientsContext;
  };



}
