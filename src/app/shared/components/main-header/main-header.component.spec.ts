import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform } from '@angular/core';

import { MainHeaderComponent } from 'src/app/shared/components/main-header/main-header.component';

describe(
  'MainHeaderComponent',
  () => {
    let component: MainHeaderComponent;
    let fixture: ComponentFixture<MainHeaderComponent>;

    beforeEach(
      async(
        () => {

          TestBed
            .configureTestingModule({
              declarations: [
                MainHeaderComponent,
              ],
            })
            .compileComponents();
        }
      )
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(MainHeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  }
);
