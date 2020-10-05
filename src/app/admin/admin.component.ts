import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../appService/auth-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userEmail;
  userName;
  userPhoneNo;
  loginButton;
  allMessage = [];
  constructor(private auth:AuthServiceService) { 
    this.auth.userName.subscribe(uname=>this.userName=uname)
    this.auth.userEmail.subscribe(uemail=>this.userEmail=uemail)
    this.auth.userPhoneNo.subscribe(uphone=>this.userPhoneNo=uphone)
    this.auth.loginButton.subscribe(lb=>this.loginButton=lb)
  }

  ngOnInit(): void {
    if (localStorage.getItem("authToken")){
      console.log("userName",this.userEmail)
      this.auth.loginButton.next(false)
      this.auth.singelData(localStorage.getItem("authToken")).subscribe(
        (data)=>{console.log(data)
        this.userName = data.data.user
        this.userEmail = data.data.email
        this.userPhoneNo = data.data.phone_number
        this.auth.adminEmail.next(data.data.email)
        this.auth.adminPhoneNo.next(data.data.phone_number)
        this.auth.allMessage(localStorage.getItem("authToken")).subscribe(
          (data)=>{console.log("msg",data)
            for (let i=0; i<data.data.length; i++){
              this.allMessage.push(data.data[i])
            }}
        )
        })
      }else{
        this.auth.loginButton.next(true)
      }
  }
  onDelete(i){
    console.log(i)
  }

}
