# Table of contents
- [Basic](#Basic)
  - [Standalone Component](#Standalone-component)
  - [Type Of Data Binding](#type-of-data-binding)
  - [Directives](#directives)
     - [Directives Hands On](#directives-hands-on)
  - [Signals](#Signals)
  - [Routing](#Routing)
  - [LifecycleHooks](#lifecyclehooks)
  - [Angular Pipes](#Angular-pipes)
  - [Custom Pipes](#custom-pipes)
  - [Forms](#forms)
     - [Template driven form](#Template-driven-form)
     - [Reactive Form](#reactive-form)

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
### Directives Hands On
- Install bootstrap
  - ```npm i bootstrap```
  - Look for bootstrap.min.js and bootstrap.min.css file under node module and copy path in angular.json file
    ```
    node_modules/bootstrap/dist/css/bootstrap.min.css
    node_modules/bootstrap/dist/js/bootstrap.min.js
    ```
 - Proceed with coding with different directives.

## Signals
- The only difference between normal variable and signal is that, signal we specifiy with parenthesis for example counter(), age(),.....etc.
- Type of signals
  - Writable signal
  - Computed signal/Read Only Signal
  - LinkedSignal
## Effects
- Kind of operation that runs when one or more signal value change.
- Signal is mandatory in effect if its not present functiona will not get execute ext.
  - Function will execute and print log ```effect(()=>console.log("counter value is "+this.counter()))``
  - Function will not execute, on console nothing will be printedeffect(()=>console.log("counter value is "))
## Routing
- Search bootstrap nav bar in google and then copy html content in app.html file.
- **RouterOutlet Directive** -> This approach will refresh entire page
  - Use href attribute to route
  - Also add router outlet tag
  - Import router outlet in app.component.js file
- **RouterLink Directive**
   - Import RouterLink in app.component.js file
   - instead of href use ```routerLink``` attribute, we can use ```routerLink``` attribute in four ways.
      - ```routerLink="user"```
      - ```routerLink="/user"```
      - ```[routerLink]="user"```
      - ```[routerLink]="['user']"```
- **RouterLinkActive Directive** --> Can be used to add css in any element. For example if we click on user, and want user link apear active. we can achieve this using RouterLinkActive directive.
   - Import ```RouterLinkActive``` directory in app.ts file
   - add following in all the menu to make selected link active.
     ```
     <a class="nav-link" routerLinkActive="active" routerLink="user">User</a>
     <a class="nav-link"  routerLinkActive="active" routerLink="data-binding">Data Binding</a>
     ```
- **Routing on form submit** ex. login if fail route to error page if pass route to success dashboard, limitation of this is that we can not perform any taks before routing for ex validating input type etc.
   - Modify user.html, add login controls
   - Import routerLink in ```user.ts``` file.
- **Routing dynamically** using ```navigage``` in ```user.ts``` file.
   - Modify ```user.html``` file add click event in button.
   - Add login method and constructor in ```user.ts``` file.
## Lifecyclehooks
- its a series of method that angular calls at different stages of component lifecycles, developer can perform action/execute code at any specific point such as when a component is initialized, updated or destroyed.
- Lifecyclehooks execution order
  1. **ngOnChanges()** --> Called when an input property  of component changes
  2. **ngOnInit()** --> called once after the component is initialized.
  3. **ngDoCheck()** --> called everytime change detection runs.
  4. **ngAfterContentInit()** --> Called after component contents is initialized.
  5. **ngAfterContentChecked()** --> Called after components contents has been checked.
  6. **ngAfterViewInit()** --> Called after components view has been initialized
  7. **ngAfterViewChecked()** -->
  8. **ngOnDestroy()** --> called before the component is destroyed.
 - modify ```user.ts``` file, implement all hooks and its corresponding methods and test

## Angular pipes
- kind of function takes input, can format data, data types, sort, aggregate, filter...etc
- example LowerCasePipe, UpperCasePipe, TitleCasePipe(first letter in upper case), DatePipe, JsonPipe, DecimalPipe,PercentagePipe, CurrencyPipe, SlicePipe,AsyncPipe.

## Custom Pipes
- run ```ng g p formatter<pipe name>``` this will create required file
- add formatter logic in ```formatterpipe.ts file, inside transform method```
- use formatter pipe name in predefinedpipe.html file to demonstrate. ex zip code is prefixed with Country which is India
## Forms
### Template driven form
  - Created using HTML templates and are suitable for simple form.
  - Steps for creating template driven forms
      1. Import FormsModule.
      2. Build HTML template.
      3. ngForm: convert to template driven form
      4. formControl: basic building block of angular form
      5. submit form: use ngSubmit to submit form data.
    - **Form Validation**
      - Built in validators
        1. Required--> Make sure form control has value
        2. MinLength
        3. MaxLength
        4. Pattern
        5. Email
  
### Reactive form

  - Created programatically using form control and form group classes, suitable for complex forms.
      1. Import the ReactiveForms module
      2. Create Form instance using form group.
      3. Create form template and map form instance to FormGroup.
      4. Add form control to your template form field
      5. Handle form submission. 

