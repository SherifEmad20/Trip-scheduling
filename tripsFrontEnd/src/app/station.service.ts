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

  addStation(station: Station): Observable<Object>{
    return this.http.post<Station>('http://localhost:8080/api/v1/student/AddStation', station);
  }

  updateStation(id:number, station:Station):Observable<Object>{
    return this.http.put(`http://localhost:8080/api/v1/student/UpdateStation/${id}`, station)
  }

  deleteStation(id: number):Observable<Object>{
    return this.http.delete(`http://localhost:8080/api/v1/student/DeleteStation/${id}`)
  }



}
