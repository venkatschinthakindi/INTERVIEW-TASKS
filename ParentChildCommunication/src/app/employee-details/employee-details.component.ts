import { Component, OnInit } from '@angular/core';
import { Data } from '../services/data.service';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: User;
  public constructor(private data: Data, private router: Router) {
    this.employee = this.data.storage;
  }

  ngOnInit(): void {
  }
  navigateToList() {
    this.router.navigate(['/'])
  }
}
