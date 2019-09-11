import { from, Observable } from 'rxjs';
import { Provider } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';

export const loader: Provider = {
  useClass: class implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
      return from(fetch(`/i18n/${lang}`));
    }
  },
  provide: TranslateLoader
};
