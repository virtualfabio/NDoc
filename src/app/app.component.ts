import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular testing';
  public docs$: [];

  constructor(){
  }

  ngOnInit(): void {
      this.docs$ = [];
  }

}
