import { Component, Input } from '@angular/core';

import { Hero } from 'src/models/heroes';
import { fadeInAnimation } from 'src/app/shared/animations/fade-in.animation';

@Component({
  selector: '[appCardHero]',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.scss'],
  animations: [fadeInAnimation],
})
export class CardHeroComponent {

  @Input() hero: Hero = {} as Hero;

}
