import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ToggleService {

    private visibiltySource = new BehaviorSubject<Boolean>(true);
    employeeListVisibilty = this.visibiltySource.asObservable();

    constructor() { }

    changeVisibilty(status: Boolean) {
        this.visibiltySource.next(status)
    }

}