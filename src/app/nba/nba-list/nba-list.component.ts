import { Component, OnInit } from '@angular/core';
import { Nba } from 'src/app/Models/nba';
import { NbaService } from 'src/app/shared/nba.service';

@Component({
  selector: 'app-nba-list',
  templateUrl: './nba-list.component.html',
  styleUrls: ['./nba-list.component.css']
})
export class NbaListComponent implements OnInit {
  nbaList: Nba[];
  team: string;
  p = 1;
  error: string;

  constructor(private nbaService: NbaService){ }

  ngOnInit(): void {
    this.allPlayers();

  }

  onDelete(id: number){
      this.nbaService.deleteById(id).subscribe(
        data => {
          this.allPlayers();
        }
      );
  }

  allPlayers(){
    this.nbaService.allPlayers().subscribe(
      data => {
        this.nbaList = data;
      }, error => {
        this.error = error.message;
      }
    );
  }

  Search(){
    if (this.team.length > 0) {
      this.nbaList = this.nbaList.filter( res => {
        return res.team.toLocaleLowerCase().match(this.team.toLocaleLowerCase());
      });
    }else{
      this.ngOnInit();
    }
   }

}
