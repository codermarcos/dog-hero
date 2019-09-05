import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TruncateModule } from '@yellowspot/ng-truncate';
import { Pipe, PipeTransform } from '@angular/core';

import { CardHeroComponent } from 'src/app/shared/components/card-hero/card-hero.component';

describe(
  'CardHeroComponent',
  () => {
    let component: CardHeroComponent;
    let fixture: ComponentFixture<CardHeroComponent>;

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
                CardHeroComponent,
                TranslateMock,
              ],
              imports: [
                TruncateModule
              ],
            })
            .compileComponents();
        }
      )
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(CardHeroComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
