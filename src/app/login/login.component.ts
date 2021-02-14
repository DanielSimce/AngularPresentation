import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { SecretService } from '../shared/secret.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;


  constructor(private authService: AuthService, private secretService: SecretService, private router: Router){ }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

    this.authService.loggedIn();

  }

  onSubmit(){
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        console.log(data);
        this.error = ' ';
        this.loginForm.reset();
        this.router.navigate(['/']);




      }, error => {
        console.log(error);
        this.error = error.error;


      }
    );
  }

}
