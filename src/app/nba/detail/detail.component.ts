import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { NbaService } from 'src/app/shared/nba.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: number;
  url: string;
  name: string;
  team: string;

  constructor(private nbaService: NbaService, private route: ActivatedRoute){ }

  ngOnInit(): void {
    /* this.route.params.subscribe(
      (data:Params) => {
        this.id = data['id'];
        this.nbaService.playerById(this.id).subscribe(
          data => {
            this.name = data.name;
            this.team = data.team;
            this.url = data.url;
          }
        );
      }
    );
*/
      this.route.data.subscribe(
        (data: Data) => {
            this.name = data['nba'].name;
            this.team = data['nba'].team;
            this.url = data['nba'].url;


        }
      );


  }

}
