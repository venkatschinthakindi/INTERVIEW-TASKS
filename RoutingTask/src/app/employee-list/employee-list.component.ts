import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/User';
import { ToggleService } from '../services/toggle.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  _employeeList: User[];
  get employeeList(): User[] {
    return this._employeeList;
  }

  @Input('employeeList')
  set employeeList(value: User[]) {
    this._employeeList = value;
  }
  @Output() deleteEmployeeEvent: EventEmitter<number> = new EventEmitter();
  showEmployeeList: Boolean;
  constructor(private _toggleService: ToggleService) {
    this._toggleService.employeeListVisibilty.subscribe((status: Boolean) => {
      this.showEmployeeList = status;
    });
  }

  ngOnInit(): void {
  }
  DeleteEmpDetails(id: number) {
    if (!!id && !!this.employeeList) {
      this.deleteEmployeeEvent.emit(id)
    }
  }


}
