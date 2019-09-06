import { Component } from '@angular/core';
import { HeroService } from './services/hero/hero.service';
import { Heroes } from 'src/models/heroes';

@Component({
  selector: 'body[appMain]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public readonly paginator = 4;
  public heroes: Heroes = [];
  public page = 1;

  constructor(
    private hero: HeroService
  ) {}

  public search(filters: { [key: string]: string }) {
    this.hero
      .get(filters)
      .subscribe(heros => this.heroes = heros);
  }
}
