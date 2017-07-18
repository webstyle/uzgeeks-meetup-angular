import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCardModule, MdListModule, MdToolbarModule} from '@angular/material';
import {ConnectionBackend, Http, HttpModule} from '@angular/http';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {RequestService} from './services/request.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdListModule,
    MdCardModule,
    MdToolbarModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
