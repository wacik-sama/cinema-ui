import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BackendService} from "../shared/backend.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  username: FormControl;
  password: FormControl;
  name: FormControl;
  surname: FormControl;

  constructor(public dialogRef: MatDialogRef<RegisterComponent>,
              private backendService: BackendService) {
    this.username = new FormControl();
    this.password = new FormControl();
    this.name = new FormControl();
    this.surname = new FormControl();
    this.form = new FormGroup(
      {
        username: this.username,
        password: this.password,
        name: this.name,
        surname: this.surname
      }
    );
  }

  ngOnInit(): void {
  }

  signIn() {
    this.backendService.register(this.username.value, this.password.value, this.name.value, this.surname.value).subscribe(res => {
      console.log(res);
    });
    this.dialogRef.close();
  }
}
