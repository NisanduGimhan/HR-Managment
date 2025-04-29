import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashbord', pathMatch: 'full' },
    { path: 'dashbord', component: DashboardComponent },
    { path: 'add', component: AddEmployeeComponent },
    { path: '**', redirectTo: '/dashbord' }
];
