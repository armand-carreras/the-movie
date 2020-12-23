import { TestBed } from '@angular/core/testing';

import { FireMovieService } from './fire-movie.service';

describe('FireMovieService', () => {
  let service: FireMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
