import { NgModule } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from 'src/app/app.component';

import { I18nModule } from 'src/app/i18n/i18n.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MockService } from 'src/app/services/mock/mock.service';
import { HostsService } from 'src/app/services/hosts/hosts.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    InMemoryWebApiModule.forRoot(MockService, { passThruUnknownUrl: true }),
    I18nModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [
    HostsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('pt');
  }
}
