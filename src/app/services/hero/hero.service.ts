import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Heroes } from 'src/models/heroes';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private readonly URL = `${environment.api_url}heroes/`;

  constructor(
    private http: HttpClient,
  ) { }

  public get(params?: { [key: string]: string }, id: string = ''): Observable<Heroes> {
    return this.http.get<Heroes>(`${this.URL}${id}`, { params });
  }
}
