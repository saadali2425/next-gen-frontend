import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      this.authService.signIn(this.signInForm.value).subscribe(
        (response) => {
          
          const snackBarRef = this.snackBar.open('Sign-in successful!', 'Close', {
            duration: 3000,
          });
          snackBarRef.afterDismissed().subscribe(() => {
            this.router.navigate(['/writing-app']); 
          });

        },
        (error) => {
          this.snackBar.open('Sign-in failed: ' + (error.error.error || 'Invalid Credentials'), 'Close', {
            duration: 3000,
          });
        }
      );
    }
  }

  navigateToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }
}
