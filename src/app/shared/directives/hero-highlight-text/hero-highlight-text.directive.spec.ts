import { ElementRef } from '@angular/core';
import { HeroHighlightTextDirective } from 'src/app/shared/directives/hero-highlight-text/hero-highlight-text.directive';

describe('HeroHighlightTextDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(document.createElement('div'));
    const directive = new HeroHighlightTextDirective(el);
    expect(directive).toBeTruthy();
  });
});
