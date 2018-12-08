export interface IEmployees {
    name: string;
    location: string;
    age: number;
    gender: string;
};

export const employees: IEmployees[] = [

    {
        name: 'Alex',
        location: 'Washington',
        age: 35,
        gender: 'male'
    },
    {
        name: 'Will',
        location: 'Argentina',
        age: 20,
        gender: 'male'
    },
    {
        name: 'Alex',
        location: 'Berlin',
        age: 30,
        gender: 'female'
    },
    {
        name: 'Alex',
        location: 'Arizona',
        age: 40,
        gender: 'female'
    },
    {
        name: 'Mawhy',
        location: 'Ethiopia',
        age: 36,
        gender: 'female'
    }
];