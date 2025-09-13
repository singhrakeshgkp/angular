import { TestBed } from '@angular/core/testing';

import { ResourceSvc } from './resource-svc';

describe('ResourceSvc', () => {
  let service: ResourceSvc;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceSvc);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
