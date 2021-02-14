import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IResponse } from '../Models/IResponse';
import { Name } from '../Models/Name';
import { SecretService } from '../shared/secret.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  secrets: Observable<IResponse>;
  admins: Name[];
  users: Name[];

  constructor(private secretService: SecretService, private router: Router) { }

  ngOnInit(): void {
    this.getAdminDeveloperSecrets();
  }

  getAdminDeveloperSecrets(){
    this.secrets = this.secretService.adminDeveloperSecrets();
  }

  onAdmin(){
    this.router.navigate(['register-admin']);
  }

  onPlayer(){
    this.router.navigate(['create-player']);
  }


  onTeam(){
    this.router.navigate(['create-team']);
  }

  onMovie(){
    this.router.navigate(['movie']);
  }

  onAdmins(){
    this.secretService.Admins().subscribe(
      data => {
        this.admins = data;
      }
    );
  }

  onUsers(){
    this.secretService.Users().subscribe(
      data => {
        this.users = data;
      }
    );
  }

}
