import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Employee } from '../models/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule ,CommonModule,RouterOutlet,RouterModule,RouterLink],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  employee1 = {
    name: '',
    email: '',
    department: ''
  };

  departments: string[] = ['HR', 'IT', 'FINANCE', 'OPERATIONS'];

  createEmployee() {
    const payload = {
      name: this.employee1.name,
      email: this.employee1.email,
      department: this.employee1.department
    };
  
    this.employeeService.addEmployee(payload).subscribe({
      next: (response) => {
        console.log('Employee created:', response);
        this.router.navigate(['/employees']);
      },
      error: (err) => {
        console.error('Error creating employee:', err);
      }
    });
  }

  onCancel() {
    this.router.navigate(['/dashbord']);
  }

}
