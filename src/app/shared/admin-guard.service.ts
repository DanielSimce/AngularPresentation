import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AdminGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       const role =  localStorage.getItem('role');

       if (role === 'Admin'){
         return true;
       }else{
         alert(`Go Login Like Admin`);
         this.router.navigate(['/']);
}

  }
}
