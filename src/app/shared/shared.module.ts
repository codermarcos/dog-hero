import { NgModule, Type, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MainHeaderComponent
} from 'src/app/shared/components/main-header/main-header.component';

const shared: (any[] | Type<any>)[] = [
  MainHeaderComponent,
];

@NgModule({
  declarations: [...shared],
  imports: [CommonModule],
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
