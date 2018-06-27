import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './common/data/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './index-menu/menu.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './index-header/header.component';
import { FooterComponent } from './index-footer/footer.component';
import { PendingIncidentComponent } from './index-content-pending-incident/pending-incident.component';
import { WaitingIncidentComponent } from './index-content-waiting-incident/waiting-incident.component';
import { EventAggregator } from './common/services/eventaggregator.service';
import { StringKey } from './common/model/stringKey';
import { transition } from '@angular/animations/src/animation_metadata';
import { IncidentStatusStringPipe } from './common/pipe/incidentstatusstring.pipe';
import { DetailsIncidentComponent } from './index-content-details-incident/details-incident.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    IndexComponent,
    FooterComponent,
    PendingIncidentComponent,
    WaitingIncidentComponent,
    IncidentStatusStringPipe,
    DetailsIncidentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, EventAggregator, StringKey],
  bootstrap: [AppComponent]
})
export class AppModule {
}

