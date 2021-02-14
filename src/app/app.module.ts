import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './Player/player-list/player-list.component';
import { PlayerDetailComponent } from './Player/player-detail/player-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbaComponent } from './nba/nba.component';
import { NbaListComponent } from './Nba/nba-list/nba-list.component';
import { DetailComponent } from './Nba/detail/detail.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamsListComponent } from './Teams/teams-list/teams-list.component';
import { TeamsDetailComponent } from './teams/teams-detail/teams-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './Movies/movie-list/movie-list.component';
import { MovieDetailsComponent } from './Movies/movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { ResolverService } from './shared/resolver.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { ColorDirective } from './Directivies/color.directive';
import { LoopDirective } from './Directivies/loop.directive';
import { TimeoutDirective } from './Directivies/timeout.directive';
import { UppercasePipe } from './Pipes/uppercase.pipe';
import { PipePipe } from './Pipes/pipe.pipe';
import { AuthInterceptorService } from './shared/auth-interceptor.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    NbaComponent,
    NbaListComponent,
    DetailComponent,
    TeamsComponent,
    TeamsListComponent,
    TeamsDetailComponent,
    MoviesComponent,
    MovieListComponent,
    MovieDetailsComponent,
    LoginComponent,
    RegisterComponent,
    RegisterAdminComponent,
    HomeComponent,
    AdminComponent,
    ManagerComponent,
    NotFoundComponent,
    ColorDirective,
    LoopDirective,
    TimeoutDirective,
    UppercasePipe,
    PipePipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule, HttpClientModule, NgxPaginationModule
  ],
  providers: [ResolverService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
