import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.scss']
})
export class FriendFormComponent implements OnInit {
  friendForm!: FormGroup;

  constructor(private fb: FormBuilder ,private router: Router,private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.friendForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]]
    });
  }
  
  onSubmit() {
    if (this.friendForm.valid) {
      const snackBarRef = this.snackBar.open('Draft sent successfully!', 'Close', {
        duration: 3000,
      });
      snackBarRef.afterDismissed().subscribe(() => {
        this.router.navigate(['/writing-app']); 
      });
    } else {
      this.snackBar.open('Draft scannot be sent!', 'Close', {
        duration: 3000,
      });
    }
    
  }
}
