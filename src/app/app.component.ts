import { Component, OnInit, ViewContainerRef, EventEmitter, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-tour-of-heroes';

  constructor(private http: HttpClient) { }

  public ObjData: any;

  ngOnInit(): void {
    this.test();
  }

  public test() {
    this.http.get('https://static.easysunday.com/covid-19/getTodayCases.json').subscribe(res => {
      console.log(res)
      this.ObjData = res;
    });
  }
}