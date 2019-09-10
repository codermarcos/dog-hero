import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TruncateModule } from '@yellowspot/ng-truncate';
import { Pipe, PipeTransform, Directive, Input } from '@angular/core';

import { CardHeroComponent } from 'src/app/shared/components/card-hero/card-hero.component';

describe(
  'CardHeroComponent',
  () => {
    let component: CardHeroComponent;
    let fixture: ComponentFixture<CardHeroComponent>;

    beforeEach(
      async(
        () => {
          @Directive({
            selector: '[translate]'
          })
          class TranslateDirectiveMock {
            @Input() translateParams: any;
            @Input() translate: any;
          }

          @Directive({
            selector: '[appHeroHighlightIcon]'
          })
          class HeroHighlightIconMock {
            @Input() appHeroHighlightIcon: any;
          }

          @Pipe({ name: 'translate' })
          class TranslatePipeMock implements PipeTransform {
            transform(): string {
              return 'translated';
            }
          }

          TestBed
            .configureTestingModule({
              declarations: [
                TranslateDirectiveMock,
                HeroHighlightIconMock,
                CardHeroComponent,
                TranslatePipeMock,
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
