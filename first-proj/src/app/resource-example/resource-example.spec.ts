import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceExample } from './resource-example';

describe('ResourceExample', () => {
  let component: ResourceExample;
  let fixture: ComponentFixture<ResourceExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
