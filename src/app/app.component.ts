import { Component } from '@angular/core';
import { HostsService } from './services/hosts/hosts.service';

@Component({
  selector: 'body[appMain]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private hosts: HostsService
  ) {}

  public search() {
    this.hosts.get().subscribe(e => console.log(e));
  }
}
