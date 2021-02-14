import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;
  names: string[] = ['Daniel ', 'Stefani ', 'Tomi ', 'Teo '];

  constructor(private authService: AuthService, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.message = data['message'];
      }
    );
  }



}
