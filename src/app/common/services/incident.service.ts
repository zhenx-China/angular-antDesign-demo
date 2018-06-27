import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Incident } from '../model/incident';
import { ResourcesPeople } from '../model/resourcesPeople';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  private incidentUrl = 'api/incidentlist';  // URL to web api
  private incidentByIdUrl = 'api/incidentlist/';
  private resourcesPeopleUrl = 'api/resourcesPeople';

  constructor( private http: HttpClient) { }

  // 从模拟数据服务中获取警情列表的方法
  getAllIncident (): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.incidentUrl);
  }

  // 根据警情id获取单个警情数据
  getIncidentById (id: string): Observable<Incident> {
    return this.http.get<Incident>(this.incidentByIdUrl + id);
  }

  // 获取资源人列表
  getAllResourcesPeople(): Observable<ResourcesPeople[]> {
    return this.http.get<ResourcesPeople[]>(this.resourcesPeopleUrl);
   }

  // 根据警情ID删除警情
  deleteIncidentById (id: string): Observable<Incident> {
    return this.http.delete<Incident>(this.incidentByIdUrl + id);
  }

  // 新增警情数据
  addIncident (incident: Incident): Observable<Incident> {
    return this.http.post<Incident>(this.incidentUrl, incident);
  }
}
