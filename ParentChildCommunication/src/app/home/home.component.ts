import { Component } from '@angular/core';
import { User } from '../models/User';
import { ToggleService } from '../services/toggle.service';
import { Data } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  employeeInfo: User = new User();
  employeeList: User[] = [];
  showEmployeeList: Boolean;
  statusText: string;
  constructor(private _toggleService: ToggleService, private data: Data) {
    this._toggleService.employeeListVisibilty.subscribe((status: Boolean) => {
      this.showEmployeeList = status;
      this.statusText = status ? 'Hide' : 'Show';
    });
    this.employeeList = this.data.employeesListStorage || [];
  }
  AddNewUser(userInfo: User) {
    userInfo.Id = this.employeeList.length + 1;
    this.employeeList = [...this.employeeList, userInfo];
    this.data.employeesListStorage = this.employeeList;
    this.employeeInfo = new User();
  }
  changeStatus() {
    this._toggleService.changeVisibilty(this.showEmployeeList);
  }
  DeleteEmpDetails(id: number) {
    if (!!id && !!this.employeeList) {
      this.employeeList = this.employeeList.filter(e => e.Id !== id);
    }
  }
}
