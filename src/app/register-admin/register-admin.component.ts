import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'protractor';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CodeError } from '../Models/CodeError';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  registerForm: FormGroup;
  error: CodeError[];
  admin: string;

  constructor(private http: HttpClient, private authService: AuthService){ }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required),
      jobTitle: new FormControl(null, Validators.required),

    });
  }

  onSubmit(){
      this.authService.registerAdmin(this.registerForm.value).subscribe(
        data => {
          this.registerForm.reset();
          this.error = [];
          this.admin = 'Successful Created Admin';
        }, err => {
        this.error = err.error;
        this.registerForm.reset();
        }
      );
  }

}
