import { HttpClient, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../shared/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  playerForm: FormGroup;
  id: number;
  btn = 'Save';
  error: string;

  constructor(private playerService: PlayerService,
              private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.playerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      url: new FormControl(null, Validators.required)

    });

    this.route.paramMap.subscribe(
      param => {
        if (param.has('id')) {
          this.id = +param.get('id');
          this.playerService.playerById(this.id).subscribe(
            data => {
              this.playerForm.patchValue(data);
              this.btn = 'Update';
            }, error => {
              this.error = error.error;
            }
          );

        }

      }
    );


  }

  onSubmit() {
    if (this.id && this.id > 0) {
      const update = {
        id: this.id, name: this.playerForm.get('name').value, country: this.playerForm.get('country').value,
        url: this.playerForm.get('url').value
      };
      this.playerService.updatePlayer(update).subscribe(
        data => {
          this.router.navigate(['/player-list']);
        }
      );

    } else {
      this.playerService.savePlayer(this.playerForm.value).subscribe(
        data => {
          this.playerForm.reset();
          this.router.navigate(['/player-list']);
        }
      );
    }
  }


}
