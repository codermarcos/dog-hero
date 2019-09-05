import { Component } from '@angular/core';
import { HeroService } from './services/hero/hero.service';
import { Heroes } from 'src/models/heroes';

@Component({
  selector: 'body[appMain]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public heroes: Heroes = [];

  constructor(
    private hero: HeroService
  ) {
    this.search({ region_address: 'V' });
  }

  public search(filters: { [key: string]: string }) {
    this.hero.get(filters).subscribe(e => this.heroes = e);
  }
}
