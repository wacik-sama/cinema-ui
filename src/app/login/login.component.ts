import {Component, NgModule, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormsModule, FormControl, FormGroup} from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: FormControl;
  password: FormControl;
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<LoginComponent>) {
    this.username = new FormControl();
    this.password = new FormControl();

    this.form = new FormGroup(
      {
        username: this.username,
        password: this.password
      }
    );
  }

  ngOnInit(): void {
  }

  login() {
    console.log("CHUJ", this.username.value, this.password.value)
      if (this.username.value === 'wacik' && this.password.value === '123') {
        this.dialogRef.close('user');
      }
    if (this.username.value === 'wacik' && this.password.value === 'sama') {
      this.dialogRef.close('admin');
    }
  }
}
