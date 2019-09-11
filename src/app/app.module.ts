import locale from '@angular/common/locales/pt';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from 'src/app/app.component';

import { SharedModule } from 'src/app/shared/shared.module';

import { MockService } from 'src/app/services/mock/mock.service';
import { HeroService } from 'src/app/services/hero/hero.service';

registerLocaleData(locale, 'pt');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    InMemoryWebApiModule.forRoot(MockService, { passThruUnknownUrl: true }),
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    HeroService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
