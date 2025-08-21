import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directives.html',
  styleUrl: './structural-directives.scss'
})
export class StructuralDirectives {
 isChecked: boolean = false;
 isInputFieldEnabled = true;
 tandC: boolean=false;
 customers: any[] = [
  {id:"001",name:"rakesh"},
  {id:"002","name":"suresh"}
 ];

 grade: string = "R2";

 input1: string = "a";
 input2: string="a";
 onClick(){
  this.isChecked = !this.isChecked;
 }
 showInputField(){
  this.isInputFieldEnabled =true;
 }
 hideInputField(){
  this.isInputFieldEnabled = false;
 }

 termAndCondition(){
  this.tandC = !this.tandC;
 }

}
