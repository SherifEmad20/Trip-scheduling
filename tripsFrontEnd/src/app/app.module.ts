import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { StationListComponent } from './station-list/station-list.component';
import { AddStationComponent } from './add-station/add-station.component';
import { UpdateStationComponent } from './update-station/update-station.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';
import { TripListComponent } from './trip-list/trip-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomePageComponent,
    AdminListComponent,
    UpdateAdminComponent,
    StationListComponent,
    AddStationComponent,
    UpdateStationComponent,
    AddTripComponent,
    UpdateTripComponent,
    TripListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
