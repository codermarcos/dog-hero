import { NgModule, ModuleWithProviders } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { loader } from './loader.translate';

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

