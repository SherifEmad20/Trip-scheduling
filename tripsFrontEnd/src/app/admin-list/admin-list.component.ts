import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin'
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  admins!: Admin[];

  constructor(private adminService:AdminService, private router : Router) { }

  ngOnInit(): void {
    this.getAdminList();
  }

  private getAdminList(){
    this.adminService.getAdminList().subscribe(data => {
      this.admins = data;
    })
  }
  
  updateAdmin(id:number){
      this.router.navigate(['update-admin', id])
  }

  deleteAdmin(id:number){
    this.adminService.deleteAdmin(id).subscribe(data => {
      this.getAdminList()
    })
  }
}
