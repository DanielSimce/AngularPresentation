import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.authService.currentUser){
      return next.handle(req);
  }else{
      const modifiedReq = req.clone({
          headers: new HttpHeaders({
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }),
            params: new HttpParams().set('Simce', 'Zver')
      });
      return next.handle(modifiedReq);
  }
  }
}
