import { Component, OnInit } from '@angular/core';
import { ResourceSvc } from '../Services/resource-svc';
import { CommonModule } from '@angular/common';
import { CommonCompex } from '../common-compex/common-compex';

@Component({
  selector: 'app-resource-example',
  imports: [CommonModule,CommonCompex],
  templateUrl: './resource-example.html',
  styleUrl: './resource-example.scss'
})
export class ResourceExample implements OnInit {
  usersData:any;
  resourceComp:string="Welcome to Resource Example Component";
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
