import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-compex',
  imports: [],
  templateUrl: './common-compex.html',
  styleUrl: './common-compex.scss'
})
export class CommonCompex {
/*  commonCompProp="Welcome to resuable complenent section"; */ // this line will make content of common-compex.html dynamic
// but to make parent compoentnt dynamic we need to use @Input decorator
@Input() commonCompProp:string="Welcome to resuable complenent section";
}
