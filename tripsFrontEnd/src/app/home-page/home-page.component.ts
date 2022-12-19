import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToAdminList(){
    this.router.navigate(['/adminList'])
  }

  goToStationList(){
    this.router.navigate(['/stationList'])    
  }

  goToTripList(){
    this.router.navigate(['/tripList'])    
  }

  addStation(){
    this.router.navigate(['addStation'])
  }

  addTrip(){
    this.router.navigate(['addTrip'])    
  }


}
