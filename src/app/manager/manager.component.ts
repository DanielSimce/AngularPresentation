import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IResponse } from '../Models/IResponse';
import { Name } from '../Models/Name';
import { SecretService } from '../shared/secret.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  secrets: Observable<IResponse>;
  managers: Name[];
  users: Name[];

  constructor(private secretService: SecretService, private router: Router){ }

  ngOnInit(): void {
    this.getManagerDeveloperSecrets();
  }

  getManagerDeveloperSecrets(){
    this.secrets = this.secretService.managerDeveloperSecrets();
  }

  onNba(){
    this.router.navigate(['nba']);
  }

  onManagers(){
    this.secretService.Managers().subscribe(
      data => {
        this.managers = data;
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
