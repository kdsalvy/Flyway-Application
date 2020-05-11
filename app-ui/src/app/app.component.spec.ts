import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from '@ag-grid-community/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { UserService } from './service/user.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    console.log("Running Application Component Tests")
  }));

  it('should assert true', () => {
    expect(true).toBeTruthy();
  });
});
