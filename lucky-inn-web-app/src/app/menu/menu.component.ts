import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],

})
export class MenuComponent implements OnInit {
  // menu: MenuCategory[] = [];
   menu;
  // type MyArrayType = Array<{id: number, text: string}>;

  constructor(
    private http: HttpClient
    ) {
      this.menu = this.getMenu();
  }

  ngOnInit() {
    console.log('Init');
    //console.log(this.getMenu());
    //this.menu = this.getMenu();
  }

  getMenu() {
    console.log('Getting Assets');
    return this.http.get('/assets/menu.json');
    //return this.http.get('/assets/testFile.json');
    //return this.http.get('/assets/testFile.json')..map(res:Response) => res.json().data);
  }

}
