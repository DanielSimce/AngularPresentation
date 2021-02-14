import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { error } from 'protractor';
import { Teams } from 'src/app/Models/teams';
import { TeamsService } from 'src/app/shared/teams.service';

@Component({
  selector: 'app-teams-detail',
  templateUrl: './teams-detail.component.html',
  styleUrls: ['./teams-detail.component.css']
})
export class TeamsDetailComponent implements OnInit {
  id: number;
  name: string;
  url: string;
  error: string;
  team: Teams;


  constructor(private teamsService: TeamsService, private route: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      param => {
        if (param.has('id')){
          this.id = +param.get('id');
          this.teamsService.teamById(this.id).subscribe(
            data => {
                this.name = data.name;
              this.url = data.url;
              this.error = null;


            }, err => {
              this.error = err.error;
            }

          );
        }

      }
    );
  }


}
