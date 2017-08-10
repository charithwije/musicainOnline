import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule,  MdCardModule, MdSidenavModule, MdProgressSpinnerModule } from '@angular/material';
import { AppComponent }  from './app.component';
import { appRouting } from './app.router';

@NgModule({
  imports:      [ appRouting, BrowserModule, BrowserAnimationsModule, MdButtonModule, MdCheckboxModule,  MdCardModule, MdSidenavModule, MdProgressSpinnerModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
