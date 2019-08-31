import { Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const loader: Provider = {
  useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './i18n/', '.json'),
  provide: TranslateLoader,
  deps: [HttpClient]
};
