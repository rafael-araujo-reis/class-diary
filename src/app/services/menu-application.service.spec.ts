import { TestBed } from '@angular/core/testing';

import { MenuApplicationService } from './menu-application.service';

describe('MenuApplicationService', () => {
  let service: MenuApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
