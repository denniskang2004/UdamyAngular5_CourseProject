import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {NotPermittedComponent} from '../shared/not-permitted/not-permitted.component';
import {NoSelectComponent} from '../recipes/recipe-detail/no-select/no-select.component';
import {ObsDemoComponent} from '../server/obs-demo/obs-demo.component';
import {InformationComponent} from './information/information.component';
import {PageNotFoundComponent} from '../shared/page-not-found/page-not-found.component';
import {UserEditComponent} from '../server/userdemo/user-edit/user-edit.component';
import {FormDemoReactiveComponent} from '../server/form-demo-reactive/form-demo-reactive.component';
import {UserdemoComponent} from '../server/userdemo/userdemo.component';
import {HomedemoComponent} from '../server/homedemo/homedemo.component';
import {UserComponent} from '../server/userdemo/user/user.component';
import {FormDemoComponent} from '../server/form-demo/form-demo.component';
import {ServersRoutingModule} from './servers-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ServersComponent} from './servers.component';
import {serverComponent} from '../server/server.component';
import {AbcComponent} from './abc.component';

@NgModule({
  declarations:[
    AbcComponent,
    serverComponent,
    ServersComponent,
    UserdemoComponent,
    HomedemoComponent,
    InformationComponent,
    UserComponent,
    UserEditComponent,
    PageNotFoundComponent,
    NotPermittedComponent,
    NoSelectComponent,
    ObsDemoComponent,
    FormDemoComponent,
    FormDemoReactiveComponent
  ],
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    ServersRoutingModule
  ]

})
export  class ServersModule{}
