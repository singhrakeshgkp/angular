# Table of contents
- [Basic](#Basic)
  - [Standalone Component](#Standalone-component)
  - [Type Of Data Binding](#type-of-data-binding)
  - [Directives](#directives)

# Basic
## Standalone Component
- In the past before angular 14 we were using non-standalone component, if we want to use any component that component must be defined in app.module.ts file under @NgModule declaration section as shown below. However with Angular 14 or later we can use angular component independently    
  ```
   @NgModule({
    declarations: [
    UserComponent,
    StudentComponent
  ]
  })
  ``` 
- Create new component --> ```ng g c <component name> or ng generate component <component name>```
### How to use Standalone component in throughout application
- first add selector in component u want to display for example i want to display in app.html so added ```<app-user/>``` selector
- import user component in app.ts file like ``` http://localhost:4200/``` and ```imports: [RouterOutlet,User],```

## Type Of Data binding
- **One Way data binding** -> Data moves in one direction from component to view
  - **Interpolation** -> component----->{{ value }}--->view
  - **Property Binding** --> Component--->[]--->view
  - **Event Binding**   Component<----Event<---View
- **Two Way Data Binding**
  - First import ```FormsModule``` in your component.ts file
  - Now use  ngModel in your view.  ex of two way binding Component<-------[(ngModel)]------> View
## Directives
- Add Extra behavior to elements in your template
  ### Types of directives
  - **Component directive** Used with a template, this is most common directive type.
  - **Structural directive** Change appearance of DOM/elements ex ngIf, ngFor, ngSwitch
  - **Attribute directive** Change the DOM layout,
    - ngClass(adds or remove a set of css classess)
    - ngStyle(add or removes a set of HTML styles)
    - ngModel Adds two way data binding to an an html form elements 
