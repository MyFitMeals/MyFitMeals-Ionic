import { TestBed } from '@angular/core/testing';

import { RecipesLoaderService } from './recipes-loader.service';

describe('RecipesLoaderService', () => {
  let service: RecipesLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
