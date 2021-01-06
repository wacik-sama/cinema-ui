import {Component, NgModule, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormsModule, FormControl, FormGroup} from '@angular/forms';
import {BackendService} from "../shared/backend.service";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: FormControl;
  password: FormControl;
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
              private backendService: BackendService) {
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
    this.backendService.login(this.username.value, this.password.value).subscribe( res => {
      if (res === true) {
        this.backendService.getUserConfigByName(this.username.value).subscribe(res => {
          this.backendService.userConfig = res;
          this.dialogRef.close(this.backendService.userConfig.roles.id);
        });
      }
      }, error => {
      this.dialogRef.close(3);
      }
    );



    //   if (this.username.value === 'wacik' && this.password.value === '123') {
    //     this.dialogRef.close('user');
    //   }
    // if (this.username.value === 'wacik' && this.password.value === 'sama') {
    //   this.dialogRef.close('admin');
    // }
  }
}
