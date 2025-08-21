import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-component',
  imports: [],
  templateUrl: './signal-component.html',
  styleUrl: './signal-component.scss'
})
export class SignalComponent {
counter = signal(0); //OR counter: WritableSignal<Number>=signal(0)

constructor(){
  this.counter.set(10000);
  effect(()=>console.log("counter value is "+this.counter()))
}

onClick(){
  this.counter.update(initialValue=>initialValue+1);
}


/*Linked and computed signal*/
monthalySal = signal(10000);
incentive = 3000;
totalSalary = computed(()=>{
  return this.monthalySal() + this.incentive
})


computeYearlySalary(){
  this.monthalySal.set(this.monthalySal()*12);
}

}
