import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Heroes } from 'src/models/heroes';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'body[appMain]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public readonly paginator = 4;
  public readonly message = Math.floor(this.paginator / 2) - 1;
  public heroes: Heroes = [];
  public page = 1;

  constructor(
    private hero: HeroService,
    translate: TranslateService,
  ) {
    translate.use('pt');
  }

  public search(filters: { [key: string]: string }) {
    this.hero
      .get(filters)
      .subscribe(heros => this.heroes = heros);
  }
}
