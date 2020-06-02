import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class Data {

    public storage: User;
    public employeesListStorage: User[];

    public constructor() { }

}