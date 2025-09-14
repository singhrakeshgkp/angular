import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCompex } from './common-compex';

describe('CommonCompex', () => {
  let component: CommonCompex;
  let fixture: ComponentFixture<CommonCompex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonCompex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonCompex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
