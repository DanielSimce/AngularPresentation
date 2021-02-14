import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Nba } from '../Models/nba';
import { Teams } from '../Models/teams';
import { NbaService } from './nba.service';
import { TeamsService } from './teams.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Nba> {

  constructor(private nbaService: NbaService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Nba | Observable<Nba> | Promise<Nba> {
    return this.nbaService.playerById(+route.params['id']);
  }


}
