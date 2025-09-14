# Resuability
- Lets say if u have component and u want to use that in different multiple component and want some of the data of the component we want to resuse to be dynamic.

## solution
- create any three component, in my case its common-compex,  comp-2 and resource-example.
- import common component in both components .ts file
- add common component selector in both html files(both components)


## Making common component content dynamic (sharing data between component)
- we can do it using parent to child component communication
  - bind common-compex html content with .ts prop file to make it dynaming
  - decorate this property with @Input decorator this will allow parent component to send data to its child component.
  - define new prop and use this prop as input for child component as shown below ```<app-common-compex [commonCompProp]="comp2Prop"></app-common-compex>```

