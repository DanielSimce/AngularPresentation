import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../Models/IResponse';
import { Name } from '../Models/Name';

@Injectable({
  providedIn: 'root'
})
export class SecretService {

  constructor(private http: HttpClient){ }





  managerDeveloperSecrets(): Observable<IResponse>{
    return this.http.get<IResponse>('https://localhost:44382/api/user/manageDevelopers');
  }

  adminDeveloperSecrets(): Observable<IResponse>{
    return this.http.get<IResponse>('https://localhost:44382/api/user/adminDevelopers');
  }

  Admins(): Observable<Name[]>{
    return this.http.get<Name[]>('https://localhost:44382/api/user/Admins');
  }

  Managers(): Observable<Name[]>{
    return this.http.get<Name[]>('https://localhost:44382/api/user/managers');
  }

  Users(): Observable<Name[]>{
    return this.http.get<Name[]>('https://localhost:44382/api/user/Users');
  }



}
