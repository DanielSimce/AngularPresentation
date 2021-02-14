import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { runInThisContext } from 'vm';
import { Nba } from '../Models/nba';
import { CanComponentDeactivate } from '../shared/can-deactivate.service';
import { NbaService } from '../shared/nba.service';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit, CanComponentDeactivate {
  @ViewChild('f', {static: false}) nbaForm: NgForm;
  btn = 'Save';
  id: number;
  update = false;
  error: string;

  constructor(private nbaService: NbaService, private router: Router, private route: ActivatedRoute){ }


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      param => {
        if (param.has('id')){
          this.id = +param.get('id');
          this.nbaService.playerById(this.id).subscribe(
            data => {
              this.nbaForm.form.patchValue(data);
              this.btn = 'Update';
              this.update = true;
            }, error => {
              setTimeout(() => {
                this.error = error.error;
                this.router.navigate(['/']);
              }, 1000);
            }
          );
        }
      }
    );
  }

  onSubmit(){
    if (this.id && this.id > 0){
      const update: Nba = {id: this.id, name: this.nbaForm.value.name, team: this.nbaForm.value.team, url: this.nbaForm.value.url};
      this.nbaService.updatePlayer(update).subscribe(
        data => {
          this.router.navigate(['/nba-list']);
        }
      );
    }else{
      this.nbaService.savePlayer(this.nbaForm.value).subscribe(
        data => {
          this.nbaForm.reset();
          this.router.navigate(['nba-list']);
        }
      );
    }

  }

  canDeactivate(): boolean | Promise<boolean> | Observable<boolean>{
   if (this.nbaForm.dirty){
     return confirm('Do you want to make changes!!!');
   }else{
     return true;
   }

  }

}
