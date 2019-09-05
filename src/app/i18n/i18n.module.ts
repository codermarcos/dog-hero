import { NgModule, Provider, ModuleWithProviders } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const loader: Provider = {
  useFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './i18n/', '.json')
  },
  provide: TranslateLoader,
  deps: [HttpClient]
};

@NgModule({
  imports: [TranslateModule.forRoot({ loader })],
  exports: [TranslateModule],
})
export class I18nModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: I18nModule,
      providers: [],
    };
  }
}


