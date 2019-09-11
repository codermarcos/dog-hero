import { of, Observable } from 'rxjs';
import { Provider } from '@angular/core';
import * as pt from 'src/assets/i18n/pt.json';
import { TranslateLoader } from '@ngx-translate/core';

export const loader: Provider = {
  useClass: class implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
      return of(pt);
    }
  },
  provide: TranslateLoader
};
