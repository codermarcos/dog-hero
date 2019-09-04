import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HostsService } from 'src/app/services/hosts/hosts.service';

describe('HostsService', () => {
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
      const service: HostsService = TestBed.get(HostsService);
      expect(service).toBeTruthy();
    }
  );
});
