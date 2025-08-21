import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDirective } from './component-directive';

describe('ComponentDirective', () => {
  let component: ComponentDirective;
  let fixture: ComponentFixture<ComponentDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
