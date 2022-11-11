import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Station } from './station';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http:HttpClient) { }

  getStationList(): Observable<Station[]>{
    return this.http.get<Station[]>('http://localhost:8080/api/v1/student/GetStations');
  }

}
