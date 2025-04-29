import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule ,CommonModule,RouterLink,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit{
  employees: Employee[] = [];
  editingEmployee: Employee | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees(); 
  }
  
  loadEmployees(): void {
    
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        console.log(data);
        this.employees = data;
      },
      error: (err) => {
        console.error('Failed to fetch employees', err);
      }
    });
  }
  
  editEmployee(employee: Employee) {
    this.editingEmployee = { ...employee };
  }

  updateEmployee() {
    if (this.editingEmployee) {
      this.employeeService.updateEmployee(this.editingEmployee.id, this.editingEmployee).subscribe({
        next: (updated) => {
          const index = this.employees.findIndex(e => e.id === updated.id);
          if (index !== -1) this.employees[index] = updated;
          this.editingEmployee = null;
        },
        error: (err) => console.error('Update failed', err)
      });
    }
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        this.employees = this.employees.filter(e => e.id !== id);
      },
      error: (err) => console.error('Delete failed', err)
    });
  }

  cancelEdit() {
    this.editingEmployee = null;
  }
  
}