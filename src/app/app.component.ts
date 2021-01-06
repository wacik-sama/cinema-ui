import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MoviesOverviewComponent} from "./movies-overview/movies-overview.component";

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MoviesOverviewComponent) moviesOverview;

  displayedColumns: string[] = [ 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  title = 'cinema-ui';
  loggedIn = false;
  admin = false;
  regularUser = false;

  constructor(public dialog: MatDialog) {}

  login(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'admin') {
        this.loggedIn = true;
        this.admin = true;
      }
      if (result === 'user') {
        this.moviesOverview.favButton = true;
        this.loggedIn = true;
      }

      console.log('The dialog was closed');
    });
  }

  register(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }





  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  logout() {
    this.loggedIn = false;
    this.admin = false;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  // doFilter(value: any) {
  //   this.dataSource.filter.trim().toLocaleLowerCase()
  // }
}
