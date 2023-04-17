import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    email: '',
    password: '',
  });

  getEmail(): any {
    return this.loginForm.get('email')!;
  }

  getPassword(): any {
    return this.loginForm.get('password')!;
  }

  login() {
    if (
      this.getEmail().value == 'petertoth406' &&
      this.getPassword().value == 'alma'
    ) {
      localStorage.setItem(
        'login',
        JSON.stringify({ email: this.getEmail().value, isLoggedIn: true })
      );
    } else {
      alert('invalid email or password');
    }
    //alert(this.getEmail().value + ':' + this.getPassword().value);
  }

  ngOnInit(): void {}
}
