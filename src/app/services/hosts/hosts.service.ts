import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Hosts } from 'src/models/hosts';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HostsService {

  private readonly URL = `${environment.api_url}hosts/`;

  constructor(
    private http: HttpClient,
  ) { }

  public get(id: string = '', params?: { [param: string]: string }): Observable<Hosts> {
    return this.http.get<Hosts>(`${this.URL}${id}`, { params });
  }
}
