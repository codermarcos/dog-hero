import { Observable } from 'rxjs';
import { TestBed, async } from '@angular/core/testing';

import { Hosts } from 'src/models/hosts';
import { AppComponent } from 'src/app/app.component';
import { HostsService } from 'src/app/services/hosts/hosts.service';

describe(
  'AppComponent',
  () => {
    let hostService: Partial<HostsService>;
    beforeEach(
      async(
        () => {
          hostService = {
            get(id: string = '', params?: object): Observable<Hosts> { return; }
          };

          spyOn(hostService, 'get').and.returnValue({});

          TestBed
            .configureTestingModule({
              declarations: [
                AppComponent,
              ],
              providers: [
                {
                  provide: HostsService,
                  useValue: hostService,
                }
              ],
            })
            .compileComponents();
        }
      )
    );

    it(
      'should create the app',
      () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
      }
    );

    it(
      `should have a function 'search'`,
      () => {
        const fixture = TestBed.createComponent<AppComponent>(AppComponent);
        const component = fixture.componentInstance;
        expect(typeof component.search).toBe('function');
      }
    );

    it(
      'should render correct component at header',
      () => {
        const fixture = TestBed.createComponent<AppComponent>(AppComponent);

        fixture.detectChanges();

        const compiled = fixture.nativeElement;

        expect(compiled.querySelector('header').hasAttribute('appMainHeader')).toBeTruthy();
      }
    );
  });
