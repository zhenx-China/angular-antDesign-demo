import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';

import { HeaderComponent } from '../index-header/header.component';
import { NzNotificationService } from 'ng-zorro-antd';
import { from } from 'rxjs/internal/observable/from';
import { EventAggregator } from '../common/services/eventaggregator.service';
import { StringKey } from '../common/model/stringKey';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  headerComponent: HeaderComponent;
  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private route: Router ,
    private notification: NzNotificationService,
    private eventAggregator: EventAggregator,
    public stringKey: StringKey) {
  }


  ngOnInit(): void {
    this.eventAggregator.publish(this.stringKey.ChangeTitle, '登录');
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }

  login(userName: string, password: string): void {
     if ( userName === 'xuzhen' && password === '123456') {
      this.route.navigate([ 'index/pendingIncident' ]);
    //  this.eventAggregator.publish(this.stringKey.ChangeTitle, '待处理列表');
     } else {
      // tslint:disable-next-line:max-line-length
       this.createNotification('error');
    }
  }

   // 未处理消息提示方法
   createNotification(type: string): void {
    this.notification.create(type, '提示',
      '请输入正确的用户名或密码！');
  }
}
