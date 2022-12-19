import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  backendPort!:number


  getAdminList(): Observable<Admin[]>{
    return this.http.get<Admin[]>('http://localhost:'+environment.apiUrl+'/api/v1/student/GetAdmins');
  }

  signupAdmin(admin: Admin): Observable<Object>{
    return this.http.post<Admin>('http://localhost:'+environment.apiUrl+'/api/v1/student/Signup', admin);
  }

  LoginAdmin(admin: Admin): Observable<Object>{
    return this.http.post<Admin>('http://localhost:'+environment.apiUrl+'/api/v1/student/Login', admin);
  }

  updateAdmin(id:number, admin:Admin):Observable<Object>{
    return this.http.put(`http://localhost:'+${environment.apiUrl}+'/api/v1/student/UpdateAdmin/${id}`, admin)
  }

  deleteAdmin(id: number):Observable<Object>{
    return this.http.delete(`http://localhost:'+${environment.apiUrl}+'/api/v1/student/DeleteAdmin/${id}`)
  }

}

