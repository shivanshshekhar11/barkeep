import { TestBed } from '@angular/core/testing';

import { detailsResolver } from './details.resolver';

describe('CocktailDetailsResolver', () => {
  let resolver: detailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(detailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
