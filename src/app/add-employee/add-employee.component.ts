import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Employee } from '../models/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule ,CommonModule,RouterOutlet,RouterModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  
  constructor(
    private router: Router
  ) {}

  employee1 = {
    name: '',
    email: '',
    department: ''
  };

  departments: string[] = ['HR', 'IT', 'FINANCE', 'OPERATIONS'];

  createEmployee() {
    console.log('Employee created:', this.employee1);
    
  }
  onCancel() {
    this.router.navigate(['/employees']);
  }

}
