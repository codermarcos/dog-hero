import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { HighlightIcon, HighlightName } from 'src/models/heroes';

@Directive({
  selector: '[appHeroHighlightIcon]'
})
export class HeroHighlightIconDirective implements AfterViewInit {

  @Input('appHeroHighlightIcon') highlight: HighlightName;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.el.nativeElement.classList.add(`icon-${HighlightIcon[this.highlight]}`);
  }

}
