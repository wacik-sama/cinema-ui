import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BackendService} from '../shared/backend.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  form: FormGroup;
  title: FormControl;
  director: FormControl;
  premiere: FormControl;
  minAge: FormControl;

  constructor(private backendService: BackendService) {
    this.title = new FormControl();
    this.director = new FormControl();
    this.premiere = new FormControl();
    this.minAge = new FormControl();

    this.form = new FormGroup(
      {
        title: this.title,
        director: this.director,
        premiere: this.premiere,
        minAge: this.minAge
      }
    );

  }

  ngOnInit(): void {
  }

  add() {
    const movie = {title: this.title.value, premiere: this.premiere.value, director: this.director.value, minAge: this.minAge.value};
    this.backendService.addMovie(movie).subscribe(res => {
      console.log(res);
    });

  }
}
