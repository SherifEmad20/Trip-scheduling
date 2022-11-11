import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  admin : Admin = new Admin();


  constructor(private adminService:AdminService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.adminService.updateAdmin(this.id, this.admin).subscribe(data => {
      this.goToAdminList();
    })
  }

  goToAdminList(){
    this.router.navigate(['/adminList'])
  }
}
