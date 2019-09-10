import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform } from '@angular/core';

import { MainFooterComponent } from 'src/app/shared/components/main-footer/main-footer.component';

describe(
  'MainFooterComponent',
  () => {
    let component: MainFooterComponent;
    let fixture: ComponentFixture<MainFooterComponent>;

    beforeEach(
      async(
        () => {
          @Pipe({ name: 'translate' })
          class TranslateMock implements PipeTransform {
            transform(): string {
              return 'translated';
            }
          }

          TestBed
            .configureTestingModule({
              declarations: [
                MainFooterComponent,
                TranslateMock,
              ]
            })
            .compileComponents();
        }
      )
    );

    beforeEach(
      () => {
        fixture = TestBed.createComponent(MainFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }
    );

    it(
      'should create',
      () => {
        expect(component).toBeTruthy();
      }
    );
  });
