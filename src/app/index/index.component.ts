import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../index-menu/menu.component';
import { HeaderComponent } from '../index-header/header.component';
import { FooterComponent } from '../index-footer/footer.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
