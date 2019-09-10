import { Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const Loader: Provider = {
  useFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './i18n/', '.json');
  },
  provide: TranslateLoader,
  deps: [HttpClient]
};
