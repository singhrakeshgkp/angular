import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import {User} from './user/user'
//import {DataBinding} from './data-binding/data-binding'
//import {ComponentDirective} from './component-directive/component-directive'
//import { StructuralDirectives } from './structural-directives/structural-directives';
//import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { SignalComponent } from './signal-component/signal-component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    //,User,
    //DataBinding,
    //ComponentDirective,
    //StructuralDirectives,
    //AttributeDirectives,
    SignalComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('first-proj');
}
