import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-crud';

  loginForm!: UntypedFormGroup;
  loading!: boolean;

  private baseURL = 'http://localhost:8800/api/auth/login';

  constructor(
    private router: Router,
    private titleService: Title,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.titleService.setTitle('angular-material-template - Login');

    this.createForm();
  }

  private createForm() {
    const savedUserEmail = localStorage.getItem('savedUserEmail');

    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl(savedUserEmail, [
        Validators.required,
        Validators.email,
      ]),
      password: new UntypedFormControl('', Validators.required),
      rememberMe: new UntypedFormControl(savedUserEmail !== null),
    });
  }

  login() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    const data = {
      email: email,
      password: password,
    };
    this.loginUser(data).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response?.access_token) {
          this.router.navigate([
            '/dashboard',
            {
              state: {
                userDetails: response,
              },
            },
          ]);
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
    // const response = this.httpClient.post(`${this.baseURL}`, data);
  }

  resetPassword() {
    this.router.navigate(['/auth/password-reset-request']);
  }

  loginUser(user: any): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }
}
