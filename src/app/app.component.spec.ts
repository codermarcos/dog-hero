import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { Heroes } from 'src/models/heroes';
import { AppComponent } from 'src/app/app.component';
import { HeroService } from 'src/app/services/hero/hero.service';

describe(
  'AppComponent',
  () => {
    let heroService: Partial<HeroService>;
    beforeEach(
      async(
        () => {
          heroService = {
            get(params?: object, id: string = ''): Observable<Heroes> { return; }
          };

          @Component({
            selector: '[appCardHero]',
            template: '{{hero}}'
          })
          class CardHeroComponent {
            @Input() hero;
          }

          spyOn(heroService, 'get').and.returnValue({ subscribe() {} });

          TestBed
            .configureTestingModule({
              declarations: [
                CardHeroComponent,
                AppComponent,
              ],
              providers: [
                {
                  provide: HeroService,
                  useValue: heroService,
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
