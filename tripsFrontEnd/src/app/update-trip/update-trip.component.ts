import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from '../trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  trip:Trip = new Trip();

  constructor(private tripService:TripService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.tripService.updateTrip(this.id, this.trip).subscribe(data => {
      this.goToTripList();
    })
  }

  goToTripList(){
    this.router.navigate(['/tripList'])
  }


}
