import { Component } from '@angular/core';

@Component({
  selector: 'app-user', //app is prefix, its defined in angular.json file
  imports: [], //new in angular 19, was not present in angular 14
  templateUrl: './user.html',
  styleUrl: './user.scss'
})


export class User {

}
