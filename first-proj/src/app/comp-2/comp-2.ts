import { Component } from '@angular/core';
import { CommonCompex } from '../common-compex/common-compex';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp-2',
  imports: [CommonModule,CommonCompex],
  templateUrl: './comp-2.html',
  styleUrl: './comp-2.scss'
})
export class Comp2 {
comp2Prop: string = "Welcome to Comp-2 using common component";
}
