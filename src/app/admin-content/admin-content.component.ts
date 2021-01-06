import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AddMovieComponent} from '../add-movie/add-movie.component';
import {MatDialog} from '@angular/material/dialog';
import {BackendService} from '../shared/backend.service';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {

  form: FormGroup;
  permission: FormControl;
  users: any;

  constructor(private backendService: BackendService,
              public dialog: MatDialog) {
    this.permission = new FormControl();
    this.form = new FormGroup({
      permission: this.permission
    }
    );
  }

  ngOnInit(): void {
    this.backendService.getAllUsers().subscribe(res => {
      this.users = res;
    });

  }

  addNewMovie() {
    const dialogRef = this.dialog.open(AddMovieComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  savePermission() {


  }
}
