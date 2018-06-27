import { Component, OnInit } from '@angular/core';

import { EventAggregator } from '../common/services/eventaggregator.service';
import { StringKey } from '../common/model/stringKey';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titleName: string;
  constructor( private eventAggregator: EventAggregator,
    public stringKey: StringKey) {
        this.eventAggregator.subscribe(this.stringKey.ChangeTitle, this.stringKey.ChangeTitle, (titles) => {
        this.titleName = titles;
       });
    }

  ngOnInit() {
  }

}
