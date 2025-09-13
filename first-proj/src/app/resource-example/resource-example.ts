import { Component, OnInit } from '@angular/core';
import { ResourceSvc } from '../Services/resource-svc';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-example',
  imports: [CommonModule],
  templateUrl: './resource-example.html',
  styleUrl: './resource-example.scss'
})
export class ResourceExample implements OnInit {
  usersData:any;
constructor(private svc:ResourceSvc){
}
getUsers(){
  /* this.svc.getAllProducts().subscribe(res=>{
    this.usersData=res;
    console.log(this.usersData);
  });  */
// OR rx resource returns obsrvable object
  this.usersData = this.svc.resourceRxDataEx;
  /* resource example it returns promise object*/
  this.usersData=this.svc.resourceDataEx;
}


ngOnInit(): void { 
  this.getUsers();
}
}
