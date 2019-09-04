import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header[appMainHeader]',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  public open = false;

  constructor() { }

  ngOnInit() {}

  public toggle(force: boolean): void {
    this.open = typeof force === 'boolean' ? force : !this.open;
  }
}
