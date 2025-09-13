import { provideRouter, Routes } from '@angular/router';
import { ResourceExample } from './resource-example/resource-example';

export const routes: Routes = [
    { path: '', redirectTo: 'resource', pathMatch: 'full' },
    {path: 'resource',component: ResourceExample},
    //{path: 'add-employee',component: Addemployee},
    //{path:'update-employee/:id',component:Updateemployee},
    
];