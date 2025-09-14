import { provideRouter, Routes } from '@angular/router';
import { ResourceExample } from './resource-example/resource-example';
import { Comp2 } from './comp-2/comp-2';

export const routes: Routes = [
    { path: '', redirectTo: 'resource', pathMatch: 'full' },
    {path: 'resource',component: ResourceExample},
    {path:'comp',component:Comp2}
    //{path: 'add-employee',component: Addemployee},
    //{path:'update-employee/:id',component:Updateemployee},
    
];