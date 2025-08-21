import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss'
})
export class DataBinding {
  name: string = "data binding";
  description: string= "data binding example";
  mark = "";

  onRegister(){
    alert("Registered successfully");
   }
 onSubjectChange(){
   alert("Subject value changed");
   }

}
