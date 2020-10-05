import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../appService/auth-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messageForm:FormGroup
  userName;
  userEmail;
  adminPhoneNo;
  adminEmail
  constructor(private auth:AuthServiceService) {
    this.auth.userName.subscribe(uname=>this.userName=uname)
    this.auth.userEmail.subscribe(uemail=>this.userEmail=uemail)
    this.auth.adminPhoneNo.subscribe(uno=>this.adminPhoneNo=uno)
    this.auth.adminEmail.subscribe(uemail=>this.adminEmail=uemail)
   }

  ngOnInit(): void {
    this.messageForm = new FormGroup({
      'user_type': new FormControl(),
      'username': new FormControl(),
      'email': new FormControl(),
      'subject': new FormControl(),
      'message': new FormControl(),
    })


    if (localStorage.getItem("authToken")){
      console.log("userName",this.userEmail)
      this.auth.singelData(localStorage.getItem("authToken")).subscribe(
        (data)=>{console.log(data)
        this.userName = data.data.user
        this.userEmail = data.data.email
        this.messageForm.patchValue({
          user_type: 0,
          username: this.userName,
          email: this.userEmail      
  })
        })
      }
  }
  onSubmit(){
    console.log(this.messageForm.value)
    this.auth.messageSend(localStorage.getItem("authToken"),this.messageForm.value).subscribe(
      (data)=>{console.log(data)
      if (data.success){
        console.log("msg sent")
      }else{
        console.log("msg error")
      }
      }
    )
  }
}
