import { Component, OnInit } from '@angular/core';

import { Incident } from '../common/model/incident';
import { IncidentService } from '../common/services/incident.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ResourcesPeople } from '../common/model/resourcesPeople';
import { forEach } from '@angular/router/src/utils/collection';

import { TimeLine } from '../common/model/timeline';
import { DatePipe } from '@angular/common';
import { timeInterval } from 'rxjs/operators';
@Component({
  selector: 'app-details-incident',
  templateUrl: './details-incident.component.html',
  styleUrls: ['./details-incident.component.css']
})
export class DetailsIncidentComponent implements OnInit {
  incidentId: string;
  incidentData: Incident;
  resourcesPeopleData: any[] = [];
  showResources: any[] = [];
  inputchuzhijilu: string;
  // 定义调派过的资源人
  dispatchRecordsPeople: any[];
  resourcesModIsVisible = false;
  chuzhijiluModIsVisible =false;


  // 模拟时间轴用的数据
  da = this.getnowdatetime();
  items: TimeLine[] = [
    {id: '111', content: '李明开始处置警情', datetime: this.da},
    {id: '222', content: '张敏添加了一条处置记录。', datetime: this.da},
    {id: '222', content: '李明调派了一个资源', datetime: this.da}
  ];

    constructor( private activatedRoute: ActivatedRoute,
               private incidentService: IncidentService,
               private route: Router,
               // 可以转换时间格式用法this.datePipe.transform(this.dateTime, 'yyyy-MM-dd HH:mm:ss'));
               private datePipe: DatePipe) {
      activatedRoute.queryParams.subscribe(queryParams => {
          this.incidentId = queryParams.id;
      });
     }

  ngOnInit() {
    this.getIncidentById(this.incidentId);

    // 测试数据
    this.dispatchRecordsPeople = [
      {
        resourcesName    : 'WangLei',
        resourcesTime   : '2018/6/26 16：00',
      },
      {
        resourcesName    : 'ZhangXiao',
        resourcesTime   : '2018/6/26 16：00',
      }
    ];
    }


  // 根据警情ID获取警情详情测试方法
  getIncidentById(id: string): void {
    this.incidentService.getIncidentById(id)
    .subscribe(da => {
     this.incidentData = da;
    });
  }

  // 根据警情ID删除警情数据
  deleteIncidentById(id: string): void {
    this.incidentService.deleteIncidentById(id).subscribe();
  }

  // 获取所有资源人数据
  getAllResources(): void {
    this.incidentService.getAllResourcesPeople()
    .subscribe( da => {
      let temp;
      da.forEach(s => {
         // tslint:disable-next-line:prefer-const
         temp = {label: s.resourcesName, value: s.resourcesId};
         this.resourcesPeopleData.push(temp);
      });
    });
  }

  // 获取checkbox选中数据集合
  log(value: object[]): void {
    console.log(value);
  }

  // 返回警情列表
  returnList(): void {
    this.route.navigate([ 'index/pendingIncident' ]);
  }

  // 添加处置记录
  addjilu(): void {
    // tslint:disable-next-line:prefer-const
    let item: TimeLine;
    item = {id: '1', content: this.inputchuzhijilu, datetime: this.getnowdatetime()};
    this.items.push(item);

    this.dataSetjilu = [ ...this.dataSetjilu, {
      key    : `111`,
      name   : `Edward King`,
      time    : '32',
      content: `London, Park Lane no.`
    }];

    this.chuzhijiluModIsVisible = false;
  }

  // 获取当前时间
  getnowdatetime(): Date {
    return new Date();
  }

  // 结束警情
  endIncident(): void {
    this.deleteIncidentById(this.incidentId);
    this.route.navigate([ 'index/pendingIncident' ]);
  }

  // 调派资源用到
  showModal(): void {
    this.getAllResources();
    this.resourcesModIsVisible = true;
  }
  handleOk(): void {
   this.resourcesModIsVisible = false;
  }
 handleCancel(): void {
   this.resourcesModIsVisible = false;
 }


   // 调派资源用到
  czshowModal(): void {
    this.chuzhijiluModIsVisible = true;
  }
  czhandleOk(): void {
    this.chuzhijiluModIsVisible = false;
  }
  czhandleCancel(): void {
    this.chuzhijiluModIsVisible = false;
 }

  // 模拟处置记录的数据
  // tslint:disable-next-line:member-ordering
  dataSetjilu = [
    {
      key    : '1',
      name   : 'John Brown',
      time    : '2018-06-25 15:00',
      content: 'New York No. 1 Lake Park'
    },
    {
      key    : '1',
      name   : 'Jim Green',
      time    : '2018-06-25 12:00',
      content: 'London No. 1 Lake Park'
    },
    {
      key    : '1',
      name   : 'Joe Black',
      time    : '2018-06-26 13:00',
      content: 'Sidney No. 1 Lake Park'
    }
  ];
}
