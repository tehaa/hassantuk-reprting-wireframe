import { ReportingComponent } from './reporting/reporting.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandCenterComponent } from './command-center/command-center.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: LoginComponent },
  { path: "command-center", component: CommandCenterComponent },
  { path: "main", component: HomePageComponent },
  { path: "report", component: ReportingComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
