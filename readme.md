# Basic
- [Standalone Component](#Standalone-component)
- jdfkdf


# Standalone Componet
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
## How to use Standalone component in through out application
- first add selector in component u want to display for example i want to display in app.html so added ```<app-user/>``` selector
- import user component in app.ts file like ``` http://localhost:4200/``` and ```imports: [RouterOutlet,User],```
### Type of binding
- **One Way data binding** -> Data moves in one direction from component to view
  - **Interpolation** -> component----->{{ value }}--->view
  - **Property Binding** --> Component--->[]--->view
  - **Event Binding**   Component<----Event<---View
- **Two Way Data Binding**
  - First import ```FormsModule``` in your component.ts file
  - Now use  ngModel in your view.  ex of two way binding Component<-------[(ngModel)]------> View
