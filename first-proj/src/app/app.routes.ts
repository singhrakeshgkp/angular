import { Routes } from '@angular/router';
import { Posts } from './posts/posts';

export const routes: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    {path: 'posts',component: Posts}
   
];
