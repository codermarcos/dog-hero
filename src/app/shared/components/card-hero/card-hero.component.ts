import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/models/heroes';

@Component({
  selector: '[appCardHero]',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.scss']
})
export class CardHeroComponent {

  @Input() hero: Hero = {} as Hero;

}
