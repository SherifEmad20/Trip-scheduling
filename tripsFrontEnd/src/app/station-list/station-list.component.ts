import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Station } from '../station';
import { StationService } from '../station.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {

  stations!:Station[]
  

  constructor(private stationService:StationService, private router:Router) { }

  ngOnInit(): void {
    this.getStationList();
  }

  private getStationList(){
    this.stationService.getStationList().subscribe(data => {
      this.stations = data;
    })
  }

  updateStation(id:number){
    this.router.navigate(['update-station', id])
  }

  deleteStation(id:number){
    this.stationService.deleteStation(id).subscribe(data =>{
      this.getStationList();
    })
  }

}
