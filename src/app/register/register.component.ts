import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CodeError } from '../Models/CodeError';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  error: CodeError[];
  success: string;

  constructor(private authService: AuthService, private router: Router){ }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)

    });
  }

  onSubmit(){

    this.authService.register(this.registerForm.value).subscribe(
      data => {
          console.log(data);
          this.success = 'Successful Created ';
          this.registerForm.reset();
          this.error = [];
          setTimeout(() => {
            this.router.navigate(['/login']);

          }, 3000);


      }, error => {
        this.error = error.error;
        this.registerForm.reset();
      }
    );
  }

}
