import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './appService/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vegefood-app';
  userName:string="";
  userEmail:string;
  userPhoneNo:string;
  loginButton: boolean = false;
  constructor(private auth:AuthServiceService,private router:Router){
    this.auth.userName.subscribe(uname=>this.userName=uname)
    this.auth.userEmail.subscribe(uemail=>this.userEmail=uemail)
    this.auth.userPhoneNo.subscribe(uphone=>this.userPhoneNo=uphone)
    this.auth.loginButton.subscribe(lb=>this.loginButton=lb)
  }
  ngOnInit(){

    if (localStorage.getItem("authToken")){
      console.log("userName",this.userEmail)
      this.auth.loginButton.next(false)
      this.auth.singelData(localStorage.getItem("authToken")).subscribe(
        (data)=>{console.log(data)
        this.userName = data.data.user
        this.userEmail = data.data.email
        this.userPhoneNo = data.data.phone_number
        })
      }else{
        this.auth.loginButton.next(true)
      }
  }
  onLogout(){
    this.auth.logOut(localStorage.getItem("authToken")).subscribe(
      (data)=>{console.log(data)
        if (data.success){
          localStorage.removeItem("authToken")
          this.auth.loginButton.next(true)
        this.router.navigate(['login'])
        }else{
          console.log("LogoutError")
        }
      })
  }
}
