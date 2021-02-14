import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/shared/player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  id: number;
  url: string;
  name: string;
  country: string;
  error: string;

  constructor(private playerService: PlayerService, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.playerService.playerById(this.id).subscribe(
      data => {
        this.url = data.url;
        this.name = data.name;
        this.country = data.country;
      }, err => {
        this.error = err.error;
      }
    );
  }

}
