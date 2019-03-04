import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {
    this.auth.getLoggedInStatus().pipe(
      filter(isLoggedIn => isLoggedIn === true)
    ).subscribe(
      _ => {
        this.router.navigate(['/'])
      },
      error => {
        console.error(error);
      }
    )
  }

  login() {
    const value = this.form.value;

    this.auth.login(value.email, value.password).subscribe(
      _ => {
        console.log('Login ok')
      },
      error => {
        console.error(error);
      }
    )
  }
}