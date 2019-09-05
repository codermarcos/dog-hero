import { Component } from '@angular/core';

@Component({
  selector: 'header[appMainHeader]',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {

  public open = false;

  public toggle(force?: boolean): void {
    this.open = typeof force === 'boolean' ? force : !this.open;
  }
}
