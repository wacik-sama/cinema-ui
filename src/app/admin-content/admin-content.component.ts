import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AddMovieComponent} from '../add-movie/add-movie.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {

  form: FormGroup;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addNewMovie() {
    const dialogRef = this.dialog.open(AddMovieComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}
