import { Component, OnInit } from '@angular/core';

import { PendingIncidentComponent } from '../index-content-pending-incident/pending-incident.component';
import { WaitingIncidentComponent } from '../index-content-waiting-incident/waiting-incident.component';
import { EventAggregator } from '../common/services/eventaggregator.service';
import { StringKey } from '../common/model/stringKey';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  incidentCount = 0;
  constructor(
    private eventAggregator: EventAggregator,
    public stringKey: StringKey,
    private route: Router
  ) {
    this.eventAggregator.subscribe(this.stringKey.RefreshUnTreated, this.stringKey.RefreshUnTreated, (data) => {
    this.incidentCount = data;
    });
  }

  ngOnInit() {
    this.eventAggregator.publish(this.stringKey.ChangeTitle, '待处理列表');
  }
  pendingIncidentClick(): void {
    this.route.navigate([ 'index/pendingIncident' ]);
    this.eventAggregator.publish(this.stringKey.ChangeTitle, '待处理列表');
  }
  waitingIncidentClick(): void {
    this.route.navigate([ 'index/waitingIncident' ]);
    this.eventAggregator.publish(this.stringKey.ChangeTitle, '待分配列表');
  }
}
