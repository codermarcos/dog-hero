import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form[appSearchBox]',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  private today = new Date();

  @Output() submit = new EventEmitter();

  public startDate = new FormControl(this.today.toJSON().split('T')[0]);
  public endDate = new FormControl(this.today.toJSON().split('T')[0]);
  public address = new FormControl();

  constructor() { }

  public send() {
    const form: { [key: string]: string } = {};

    this.address.value && (form.region_address = `^${this.address.value}`);

    this.submit.emit(form);
  }
}
