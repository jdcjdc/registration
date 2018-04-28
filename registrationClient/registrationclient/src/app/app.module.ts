import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddRegistrationComponent } from './registration/add-registration/add-registration.component';
import {AppRoutingModule} from "./app.routing.module";
import {HttpClientModule} from "@angular/common/http";
import {RegistrationService} from "./registration/registration.service";


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AddRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
