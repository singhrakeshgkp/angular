import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.scss'
})
export class AttributeDirectives {
  textColor: string = "text-success";//green color
  isTextSuccess: boolean = false;
  classFromInput: string="";
  styleColor: string="red";
  
  customClass: any={
    'color':'yellow',
    'height':'150px',
    'width': '400px',
    'border': '1px solid black'
  }



  onClick(color: string){
    this.textColor = color;
    this.isTextSuccess=true;
  }
}
