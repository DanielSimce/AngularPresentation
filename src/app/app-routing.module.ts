import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { MovieDetailsComponent } from './Movies/movie-details/movie-details.component';
import { MovieListComponent } from './Movies/movie-list/movie-list.component';
import { MoviesComponent } from './movies/movies.component';
import { DetailComponent } from './Nba/detail/detail.component';
import { NbaListComponent } from './Nba/nba-list/nba-list.component';
import { NbaComponent } from './nba/nba.component';
import { PlayerDetailComponent } from './Player/player-detail/player-detail.component';
import { PlayerListComponent } from './Player/player-list/player-list.component';
import { PlayerComponent } from './player/player.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterComponent } from './register/register.component';
import { AdminGuardService } from './shared/admin-guard.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { TeamsDetailComponent } from './teams/teams-detail/teams-detail.component';
import { TeamsListComponent } from './Teams/teams-list/teams-list.component';
import { TeamsComponent } from './teams/teams.component';
import {ResolverService} from './shared/resolver.service';
import { CanDeactivateService } from './shared/can-deactivate.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { ManagerGuardService } from './shared/manager-guard.service';
import { LoginGuardService } from './shared/login-guard.service';





const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, data: {message: 'Web Page For Sport Events'}},
    {path: 'create-player', component: PlayerComponent, canActivate: [AdminGuardService]},
    {path: 'player/:id', component: PlayerComponent, canActivate: [AdminGuardService]},
    {path: 'player-list', component: PlayerListComponent, canActivate: [AdminGuardService]},
    {path: 'player-detail/:id', component: PlayerDetailComponent, canActivate: [AdminGuardService]},
    {path: 'nba', component: NbaComponent, canActivate: [ManagerGuardService]},
    {path: 'nba/:id', component: NbaComponent, canActivate: [ManagerGuardService] , canDeactivate: [CanDeactivateService]},
    {path: 'nba-list', component: NbaListComponent, canActivate: [ManagerGuardService], children: [
        {path: ':id/:name', component: DetailComponent, canActivate: [ManagerGuardService] , resolve: {nba: ResolverService}},
    ]},
    {path: 'create-team', component: TeamsComponent, canActivate: [AdminGuardService]},
    {path: 'team-list', component: TeamsListComponent, canActivate: [AuthGuardService], children: [
        {path: ':id', component: TeamsDetailComponent, canActivate: [AuthGuardService]}
    ]},
    {path: 'movie', component: MoviesComponent, canActivate: [AdminGuardService]},
    {path: 'movie-list', component: MovieListComponent, canActivate: [AuthGuardService]},
    {path: 'detail/:id', component: MovieDetailsComponent, canActivate: [AuthGuardService]},
    {path: 'register', component: RegisterComponent, canActivate: [LoginGuardService]},
    {path: 'register-admin', component: RegisterAdminComponent, canActivate: [AdminGuardService]},
    {path: 'login', component: LoginComponent, canActivate: [LoginGuardService]},
    {path: 'admin', component: AdminComponent, canActivate: [AdminGuardService]},
    {path: 'manager', component: ManagerComponent, canActivate: [ManagerGuardService]},
    {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo: '/not-found'}



];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})


export class AppRoutingModule{

}
