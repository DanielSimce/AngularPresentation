import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/Models/Player';
import { AuthService } from 'src/app/shared/auth.service';
import { PlayerService } from 'src/app/shared/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  playerList: Player[];
  country: string;
  p = 1;
  error: string;



  constructor(private playerService: PlayerService, private authService: AuthService){ }

  ngOnInit(): void {
      this.allPlayers();

  }

  onDelete(id: number){
    this.playerService.deleteById(id).subscribe(
      data => {
        this.allPlayers();
      });

  }

  allPlayers(){
    this.playerService.allPlayers().subscribe(
      data => {
        this.playerList = data;
      }, error => {
        this.error = error.message;
      }
    );
  }

  Search(){
    if (this.country.length > 0) {
      this.playerList = this.playerList.filter( res => {
        return res.country.toLocaleLowerCase().match(this.country.toLocaleLowerCase());
      });
    }else{
      this.ngOnInit();
    }
   }


}
