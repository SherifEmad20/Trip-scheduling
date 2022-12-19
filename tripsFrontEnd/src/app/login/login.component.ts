import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message!:string;
  admin:Admin = new Admin();

  constructor(private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
  }
  
  private loginAdmin():void{
    this.adminService.LoginAdmin(this.admin).subscribe(data => {
      alert("login successful");
      this.goToHomePage()
    }, error => {
      alert("login failed")
      this.message = "bad credintials";
    })
  }

  goToHomePage(){
    this.router.navigate(['/home-page'])
  }

  goToSignUpPage(){
    this.router.navigate(['/signup'])
  }


  onSubmit(){
    this.loginAdmin();
  }



}
