import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from 'src/app/app.component';

import { Loader } from 'src/app/i18n/loader.translate';
import { SharedModule } from 'src/app/shared/shared.module';

import { MockService } from 'src/app/services/mock/mock.service';
import { HeroService } from 'src/app/services/hero/hero.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    InMemoryWebApiModule.forRoot(MockService, { passThruUnknownUrl: true }),
    TranslateModule.forRoot(),
    NgxPaginationModule,
    HttpClientModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [
    HeroService,
    HttpClient,
    Loader,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
