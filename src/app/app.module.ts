import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReportingComponent } from './reporting/reporting.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommandCenterComponent } from './command-center/command-center.component';
import { CommandDetailsComponent } from './command-details/command-details.component';
import { CommandResultComponent } from './command-result/command-result.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    ReportingComponent,
    CommandCenterComponent,
    CommandDetailsComponent,
    CommandResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgbModule,NgbDatepickerModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
