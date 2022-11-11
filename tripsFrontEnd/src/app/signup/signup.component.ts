import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  admin:Admin = new Admin();


  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit(): void {
  }

  private signupAdmin():void{
    this.adminService.signupAdmin(this.admin).subscribe(data => {
      console.log(data)
    })
    this.goToAdminList();
  }

  goToAdminList(){
    this.router.navigate(['/adminList'])
  }

  onSubmit(){
    this.signupAdmin();
  }





}
