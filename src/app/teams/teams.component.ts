import { Component, OnInit, TestabilityRegistry, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamsService } from '../shared/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  @ViewChild('f', {static: false}) teamsForm: NgForm;

  constructor(private teamsService: TeamsService, private router: Router){ }

  ngOnInit(): void {
  }

  onSubmit(){
    this.teamsService.saveTeam(this.teamsForm.value).subscribe(
      data => {
        this.teamsForm.reset();
        this.router.navigate(['team-list']);
      }
    );
  }

}
