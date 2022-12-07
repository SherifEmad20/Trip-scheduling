import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Station } from '../station';
import { StationService } from '../station.service';
import { Trip } from '../trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  trip:Trip = new Trip()
  stations!:Station[]

  constructor(private tripService:TripService, private router:Router, private stationService: StationService) { }

  ngOnInit(): void {
  }

  private addNewTrip():void{
    this.tripService.addTrip(this.trip).subscribe(data => {
      console.log(data);
    })
    this.goToTripList();
  }

  goToTripList(){
    this.router.navigate(['/tripList'])
  }

  private getStationList(){
    this.stationService.getStationList().subscribe(data => {
      this.stations = data;
    })
  }





  onSubmit(){
    this.addNewTrip();
  }

}
