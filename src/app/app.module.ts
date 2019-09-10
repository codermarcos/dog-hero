import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from 'src/app/app.component';

import { loader } from 'src/app/i18n/loader.translate';
import { SharedModule } from 'src/app/shared/shared.module';

import { MockService } from 'src/app/services/mock/mock.service';
import { HeroService } from 'src/app/services/hero/hero.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    InMemoryWebApiModule.forRoot(MockService, { passThruUnknownUrl: true }),
    TranslateModule.forRoot({ loader }),
    NgxPaginationModule,
    HttpClientModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('pt');
  }
}
