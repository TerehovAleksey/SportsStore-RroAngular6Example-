import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private auth: AuthService) { }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth.authenticate(this.username, this.password).subscribe(
        responce => {
          if (responce) {
            this.router.navigateByUrl('/admin/main');
          }
          this.errorMessage = 'Authentication Failed';
        });
    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }
}
