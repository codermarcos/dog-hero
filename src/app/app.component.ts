import { Component } from '@angular/core';

import { Heroes } from 'src/models/heroes';
import { HeroService } from 'src/app/services/hero/hero.service';
import { fadeInAnimation } from 'src/app/shared/animations/fade-in.animation';
import { LeftInAnimation } from 'src/app/shared/animations/left-in.animation';

@Component({
  selector: 'body[appMain]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation, LeftInAnimation]
})
export class AppComponent {

  public readonly paginator = 10;
  public readonly message = Math.floor(this.paginator / 2) - 1;
  public heroes: Heroes = [];
  public page = 1;

  constructor(
    private hero: HeroService,
  ) {}

  public search(filters: { [key: string]: string }) {
    this.hero
      .get(filters)
      .subscribe(heros => this.heroes = heros);
  }
}
