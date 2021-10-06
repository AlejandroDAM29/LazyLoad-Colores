import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutes = [
    {name: 'white', path:'home'},
    {name: 'red', path:'red'},
    {name: 'blue', path:'blue'},
    {name: 'green', path:'green'},
    {name: 'yellow', path:'yellow'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
