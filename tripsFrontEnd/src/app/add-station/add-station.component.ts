import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Station } from '../station';
import { StationService } from '../station.service';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {

  station:Station = new Station()

  constructor(private stationService:StationService, private router:Router) { }

  ngOnInit(): void {
  }

  private addNewStation():void{
    this.stationService.addStation(this.station).subscribe(data => {
      console.log(data)
    })
    this.goToStationList();
  }

  goToStationList(){
    this.router.navigate(['/stationList'])
  }

  onSubmit(){
    this.addNewStation();
  }
  
}
