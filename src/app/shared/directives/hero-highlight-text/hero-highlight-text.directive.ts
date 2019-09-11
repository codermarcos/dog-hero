import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

import { Highlight, HighlightText, HighlightValue } from 'src/models/heroes';

@Directive({
  selector: '[appHeroHighlightText]'
})
export class HeroHighlightTextDirective implements AfterViewInit {

  @Input('appHeroHighlightText') highlight: Highlight;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.el.nativeElement.textContent = [
      HighlightValue[this.highlight.value] || this.highlight.value,
      HighlightText[this.highlight.name],
    ]
    .join(' ');
  }

}
