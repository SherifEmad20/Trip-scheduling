import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http:HttpClient) { }

  backendPort!:number

  getTripList(): Observable<Trip[]>{
    return this.http.get<Trip[]>('http://localhost:'+environment.apiUrl+'/api/v1/student/GetTrips');
  }

  addTrip(trip: Trip): Observable<Object>{
    return this.http.post<Trip>('http://localhost:'+environment.apiUrl+'/api/v1/student/AddTrip', trip);
  }

  updateTrip(id:number, trip:Trip):Observable<Object>{
    return this.http.put(`http://localhost:'+${environment.apiUrl}+'/api/v1/student/UpdateTrip/${id}`, trip)
  }

  deleteTrip(id: number):Observable<Object>{
    return this.http.delete(`http://localhost:'+${environment.apiUrl}+'/api/v1/student/DeleteTrip/${id}`)
  }


}
