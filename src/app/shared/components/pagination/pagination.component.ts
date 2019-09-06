import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[appPagination]',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Output() public change = new EventEmitter();
  @Input() public set items(value: number) {
    this.pages = Math.ceil(value / this.paginator);
  }
  @Input() public paginator = 10;
  @Input() public page = 0;

  public counter = Array;
  public pages = 0;
}
