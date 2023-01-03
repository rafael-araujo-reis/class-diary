import { TestBed } from '@angular/core/testing';

import { ListMaterialsService } from './list-materials.service';

describe('ListMaterialsService', () => {
  let service: ListMaterialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListMaterialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
