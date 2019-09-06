import { NgModule, Type, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncateModule } from '@yellowspot/ng-truncate';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

import {
  MainHeaderComponent
} from 'src/app/shared/components/main-header/main-header.component';
import {
  SearchBoxComponent
} from 'src/app/shared/components/search-box/search-box.component';
import {
  CardHeroComponent
} from 'src/app/shared/components/card-hero/card-hero.component';
import {
  PaginationComponent
} from 'src/app/shared/components/pagination/pagination.component';

const shared: (any[] | Type<any>)[] = [
  MainHeaderComponent,
  PaginationComponent,
  PaginationComponent,
  SearchBoxComponent,
  CardHeroComponent,
];

@NgModule({
  declarations: [...shared],
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    TruncateModule,
    FormsModule,
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
