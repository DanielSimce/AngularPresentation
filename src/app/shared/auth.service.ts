import { HttpClient, HttpHeaders } from '@angular/common/http';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';

import { Admin } from '../Models/Admin';
import { IUser } from '../Models/IUser';
import { Login } from '../Models/login';
import { Register } from '../Models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl = 'https://localhost:44382/api/identity/register';
  adminUrl = 'https://localhost:44382/api/identity/registerAdmin';
  loginUrl = 'https://localhost:44382/api/identity/login';
  private tokenExpirationTimer: any;


  helper = new JwtHelperService();

  currentUser: IUser = {
    username: null,
    email: null,
    role: null,
    jobTitle: null,
    token: null,
    tokenExpirationDate: null

  };

  constructor(private http: HttpClient, private router: Router){ }

  register(register: Register): Observable<Register>{
    return this.http.post<Register>(this.registerUrl, register);
  }

  registerAdmin(admin: Admin){
    return this.http.post(this.adminUrl, admin);

  }

  login(login: Login): Observable<IUser>{
    return this.http.post(this.loginUrl, login).pipe(
      map((response: any) => {
          const decodedToken = this.helper.decodeToken(response.token);
          console.log(decodedToken);
          const duration = decodedToken.exp - decodedToken.iat;
          const expirationDate = new Date(new Date().getTime() + duration * 1000);

          this.currentUser.username = decodedToken.given_name;
          this.currentUser.email = decodedToken.email;
          this.currentUser.jobTitle = decodedToken.JobTitle;
          this.currentUser.role = decodedToken.role;
          this.currentUser.token = response.token;
          this.currentUser.tokenExpirationDate = expirationDate;

          localStorage.setItem('token', response.token);

          if (this.currentUser.role){
            alert(`Welcome ${this.currentUser.role}`);
          }else{
            alert(`Welcome ${this.currentUser.username}`);
          }
          localStorage.setItem('role', decodedToken.role);


          localStorage.setItem('user', JSON.stringify(this.currentUser));

          this.autoLogout(duration * 1000);

          return this.currentUser;






      })
    );

  }

  autoLogin(){
    const userData: IUser = JSON.parse(localStorage.getItem('user'));
    if (!userData){
      return;
    }

    const loadedUser: IUser = {username: userData.username, email: userData.email, role: userData.role,
      jobTitle: userData.jobTitle, token: userData.token, tokenExpirationDate: userData.tokenExpirationDate};
      if (!this.helper.isTokenExpired(loadedUser.token)){
        this.currentUser = loadedUser;
      }

      const duration = new Date(userData.tokenExpirationDate).getTime() - new Date().getTime();

      this.autoLogout(duration);
  }



  loggedIn(): boolean{
    const token = localStorage.getItem('token');
    return !this.helper.isTokenExpired(token);

  }

  logOut(){
    this.currentUser = {
      username: null,
      email: null,
      role: null,
      jobTitle: null,
      token: null,
      tokenExpirationDate: null

    };
   localStorage.clear();
   this.router.navigate(['login']);
   if (this.tokenExpirationTimer){
     clearTimeout(this.tokenExpirationTimer);
   }
   this.tokenExpirationTimer = null;

  }

  autoLogout(duration: number){
    this.tokenExpirationTimer =  setTimeout(() => {
      this.logOut();
    }, duration);
  }






}
