import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStationComponent } from './add-station/add-station.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StationListComponent } from './station-list/station-list.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateStationComponent } from './update-station/update-station.component';

const routes: Routes = [

  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'home-page', component:HomePageComponent},
  {path:'update-admin/:id', component:UpdateAdminComponent},
  {path:'adminList', component:AdminListComponent},

  {path:'addStation', component:AddStationComponent},
  {path:'stationList', component:StationListComponent},
  {path:'update-station/:id', component:UpdateStationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
