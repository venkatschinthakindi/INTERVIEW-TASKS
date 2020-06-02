import { Component } from '@angular/core';
import { User } from './models/User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  employeeInfo: User = new User();
  employeeList: User[] = [];

  AddNewUser(userInfo: User) {
    userInfo.Id = this.employeeList.length + 1;
    this.employeeList = [...this.employeeList, userInfo];
    this.employeeInfo = new User();
  }
  DeleteEmpDetails(id: number) {
    if (!!id) {
      this.employeeList = this.employeeList.filter(e => e.Id !== id);
    }
  }
}