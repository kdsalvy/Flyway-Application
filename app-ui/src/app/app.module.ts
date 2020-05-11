import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AgGridModule } from '@ag-grid-community/angular';
import { AllCommunityModules } from '@ag-grid-community/all-modules';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents(AllCommunityModules.values()),
    HttpClientModule
  ],
  providers: [
    HttpClient,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
