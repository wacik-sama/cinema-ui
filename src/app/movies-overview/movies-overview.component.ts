import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {BackendService} from "../shared/backend.service";

export interface PeriodicElement {
  title: string;
  premiere: number;
  director: string;
  genre: any;
  min_age: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'Przygody zolwia pijaka', premiere: 2014, director: 'pepep', genre: {id: 1, name: 'scifi'}, min_age: '12'},
  {title: 'Przygody zolwia pijaka', premiere: 2014, director: 'pepep', genre: {id: 1, name: 'scifi'}, min_age: '12'},
  {title: 'Przygody zolwia pijaka', premiere: 2014, director: 'pepep', genre: {id: 1, name: 'scifi'}, min_age: '12'},
];



@Component({
  selector: 'app-movies-overview',
  templateUrl: './movies-overview.component.html',
  styleUrls: ['./movies-overview.component.css']
})
export class MoviesOverviewComponent implements OnInit, AfterViewInit {

  favButton = false;
  movies: any = [];
  //dataSource: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [ 'title', 'premiere', 'director', 'genre', 'minAge'];
   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private backendService: BackendService) {

  }

  ngOnInit(): void {
    this.backendService.getMovies().subscribe(res => {
     // this.dataSource = res;
      console.log(res);
    })
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addToFav(element: any) {
    this.backendService.addMovieToFavList(this.backendService.userConfig.login, element.id).subscribe(res => {
      this.backendService.dataOnBackendHasChanged.emit(element);
      console.log(res);
    })

  }
}
