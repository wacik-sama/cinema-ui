import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Przygody zolwia pijaka', weight: 2014, symbol: '9/10'},
  {position: 1, name: 'Zul w krainie czarow', weight: 2020, symbol: '2/10'},
  {position: 1, name: 'Grubol vs world', weight: 2019, symbol: '9/10'},
  {position: 1, name: 'Pewnego razu na wiacie', weight: 2020, symbol: '0.75/3'},
  {position: 1, name: 'Zolwik stradivarius', weight: 2011, symbol: '100/10'},
  {position: 1, name: 'Eskimos z przybosia historia prawdziwa', weight: 2002, symbol: '10/10'},
  {position: 1, name: 'Przygody zolwia pijaka', weight: 2020, symbol: '9/10'},
  {position: 1, name: 'Przygody zolwia pijaka', weight: 2020, symbol: '9/10'},
  {position: 1, name: 'Przygody zolwia pijaka', weight: 2020, symbol: '9/10'},
  {position: 1, name: 'Przygody zolwia pijaka', weight: 2020, symbol: '9/10'},
];



@Component({
  selector: 'app-movies-overview',
  templateUrl: './movies-overview.component.html',
  styleUrls: ['./movies-overview.component.css']
})
export class MoviesOverviewComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}