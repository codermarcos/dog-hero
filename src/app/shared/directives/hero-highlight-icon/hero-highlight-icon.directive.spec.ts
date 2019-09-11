import { ElementRef } from '@angular/core';
import { HeroHighlightIconDirective } from 'src/app/shared/directives/hero-highlight-icon/hero-highlight-icon.directive';

describe('HeroHighLightDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(document.createElement('div'));
    const directive = new HeroHighlightIconDirective(el);
    expect(directive).toBeTruthy();
  });
});
