import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Station } from '../station';
import { StationService } from '../station.service';

@Component({
  selector: 'app-update-station',
  templateUrl: './update-station.component.html',
  styleUrls: ['./update-station.component.css']
})
export class UpdateStationComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  station: Station = new Station();

  constructor(private stationService:StationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.stationService.updateStation(this.id, this.station).subscribe(data =>{
      this.goToStationList();
    })
  }

  goToStationList(){
    this.router.navigate(['/stationList'])
  }

}
