import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  isAdmin(): boolean{
    return this.authService.currentUser.role === 'Admin' ? true : false;
  }

  isManager(): boolean{
    return this.authService.currentUser.role === 'Manager' ? true : false;
  }

  isLogged(): boolean{
    return this.authService.loggedIn();
  }

  logOut(){
    this.authService.logOut();
  }

}
