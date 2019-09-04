import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { lists as hosts } from 'src/assets/data/payload.json';

@Injectable({
  providedIn: 'root'
})
export class MockService implements InMemoryDbService {
  createDb() {
    return { hosts };
  }
}
