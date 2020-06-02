import { Component } from '@angular/core';
import { User } from './models/User';
import { ToggleService } from './services/toggle.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  employeeInfo: User = new User();
  employeeList: User[] = [];
  showEmployeeList: Boolean;
  statusText: string;
  constructor(private _toggleService: ToggleService) {
    this._toggleService.employeeListVisibilty.subscribe((status: Boolean) => {
      this.showEmployeeList = status;
      this.statusText = status ? 'Hide' : 'Show';
    });
  }
  AddNewUser(userInfo: User) {
    userInfo.Id = this.employeeList.length + 1;
    this.employeeList = [...this.employeeList, userInfo];
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