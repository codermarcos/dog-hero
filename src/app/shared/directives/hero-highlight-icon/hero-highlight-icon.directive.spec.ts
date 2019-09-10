import { HeroHighlightIconDirective } from './hero-highlight-icon.directive';
import { ElementRef } from '@angular/core';

describe('HeroHighLightDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(document.createElement('div'));
    const directive = new HeroHighlightIconDirective(el);
    expect(directive).toBeTruthy();
  });
});
