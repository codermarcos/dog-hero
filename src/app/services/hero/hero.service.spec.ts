import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HeroService } from 'src/app/services/hero/hero.service';

describe('HeroesService', () => {
  beforeEach(
    () => TestBed
      .configureTestingModule({
        imports: [
          HttpClientModule,
        ],
      })
  );

  it(
    'should be created',
    () => {
      const service: HeroService = TestBed.get(HeroService);
      expect(service).toBeTruthy();
    }
  );
});
