import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http:HttpClient) { }

  getTripList(): Observable<Trip[]>{
    return this.http.get<Trip[]>('http://localhost:8080/api/v1/student/GetTrips');
  }

  addTrip(trip: Trip): Observable<Object>{
    return this.http.post<Trip>('http://localhost:8080/api/v1/student/AddTrip', trip);
  }

  updateTrip(id:number, trip:Trip):Observable<Object>{
    return this.http.put(`http://localhost:8080/api/v1/student/UpdateTrip/${id}`, trip)
  }

  deleteTrip(id: number):Observable<Object>{
    return this.http.delete(`http://localhost:8080/api/v1/student/DeleteTrip/${id}`)
  }


}
