import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teams } from 'src/app/Models/teams';
import { AuthService } from 'src/app/shared/auth.service';
import { TeamsService } from 'src/app/shared/teams.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {
  teamList: Teams[];

  constructor(private teamsService: TeamsService, private router: Router, private authService: AuthService){ }

  ngOnInit(): void {
    this.allTeams();
  }

  onDelete(id: number){
    this.teamsService.deleteById(id).subscribe(
      data => {
        this.allTeams();
        this.router.navigate(['team-list']);
      }
    );

  }

  isAdmin(): boolean{
    return this.authService.currentUser.role === 'Admin' ? true : false;
  }

  allTeams(){
    this.teamsService.allTeams().subscribe(
      data => {
        this.teamList = data;
      }
    );
  }

}
