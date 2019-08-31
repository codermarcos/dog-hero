import { NgModule, Type, ModuleWithProviders } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

import {
  MainHeaderComponent
} from 'src/app/shared/components/main-header/main-header.component';
import {
  SearchBoxComponent
} from 'src/app/shared/components/search-box/search-box.component';

const shared: (any[] | Type<any>)[] = [
  MainHeaderComponent,
  SearchBoxComponent,
];

@NgModule({
  declarations: [...shared],
  imports: [
    TranslateModule,
    CommonModule,
  ],
  exports: [...shared],
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }

}
