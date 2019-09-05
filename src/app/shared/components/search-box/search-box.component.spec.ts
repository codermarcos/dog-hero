import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponent } from 'src/app/shared/components/search-box/search-box.component';

describe(
  'SearchBoxComponent',
  () => {
    let component: SearchBoxComponent;
    let fixture: ComponentFixture<SearchBoxComponent>;

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
                SearchBoxComponent,
                TranslateMock,
              ],
              imports: [
                ReactiveFormsModule,
                FormsModule,
              ]
            })
            .compileComponents();
        }
      )
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(SearchBoxComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
