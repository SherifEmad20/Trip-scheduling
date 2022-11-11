import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trips!: Trip[];

  constructor(private tripService:TripService, private router:Router) { }

  ngOnInit(): void {
    this.getTripList();
  }

  private getTripList(){
    this.tripService.getTripList().subscribe(data => {
      this.trips = data;
    })
  }

  updateTrip(id:number){
    this.router.navigate(['update-trip', id])
  }

  deleteTrip(id:number){
    this.tripService.deleteTrip(id).subscribe(data =>{
      this.getTripList();
    })
  }

}
