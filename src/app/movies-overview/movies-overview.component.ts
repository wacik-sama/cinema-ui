import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {BackendService} from "../shared/backend.service";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  genre: any;
  min_age: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Przygody zolwia pijaka', weight: 2014, symbol: '9/10', genre: {id: 1, name: 'scifi'}, min_age: '12'},
  {position: 1, name: 'Zul w krainie czarow', weight: 2020, symbol: '2/10', genre: {id: 1, name: 'scifi'}, min_age: '12'},
  {position: 1, name: 'Grubol vs world', weight: 2019, symbol: '9/10', genre: {id: 1, name: 'scifi'}, min_age: '12'},
  {position: 1, name: 'Pewnego razu na wiacie', weight: 2020, symbol: '0.75/3', genre: {id: 1, name: 'scifi'}, min_age: '12'},
  {position: 1, name: 'Zolwik stradivarius', weight: 2011, symbol: '100/10', genre: {id: 1, name: 'scifi'}, min_age: '12'},
  {position: 1, name: 'Eskimos z przybosia historia prawdziwa', weight: 2002, symbol: '10/10', genre: {id: 1, name: 'scifi'}, min_age: '12'},
  {position: 1, name: 'Przygody zolwia pijaka', weight: 2020, symbol: '9/10', genre: {id: 1, name: 'scifi'}, min_age: '12'},
  {position: 1, name: 'Przygody zolwia pijaka', weight: 2020, symbol: '9/10', genre: {id: 1, name: 'scifi'}, min_age: '12'},
  {position: 1, name: 'Przygody zolwia pijaka', weight: 2020, symbol: '9/10', genre: {id: 1, name: 'scifi'}, min_age: '12'},
  {position: 1, name: 'Przygody zolwia pijaka', weight: 2020, symbol: '9/10', genre: {id: 1, name: 'scifi'}, min_age: '12'},
];



@Component({
  selector: 'app-movies-overview',
  templateUrl: './movies-overview.component.html',
  styleUrls: ['./movies-overview.component.css']
})
export class MoviesOverviewComponent implements OnInit, AfterViewInit {

  favButton = false;
  movies: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [ 'title', 'premiere', 'director', 'genre', 'minAge'];
   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private backendService: BackendService) {

  }

  ngOnInit(): void {
    this.backendService.getMovies().subscribe(res => {
      console.log(res);
    })
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addToFav() {


  }
}
