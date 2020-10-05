import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../appService/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logForm:FormGroup;
  userName;
  email;
  constructor(
    private fb:FormBuilder, 
    private auth:AuthServiceService, 
    private router:Router
    ) {

     }

  ngOnInit(): void {
    this.logForm = this.fb.group({
      'email' : [''],
      'password' : [''],
      'user_type' : ['']
    })
  }
  onSubmit(){
    this.auth.login(this.logForm.value).subscribe(
      (data)=>{console.log(data)
        if (data.success){
          console.log("user_type",data.data.user_type)
          console.log(data.data.token.token)
          localStorage.setItem("authToken",data.data.token.token)
          this.auth.userName.next(data.data.user)
          this.auth.userEmail.next(data.data.email)
          this.auth.userPhoneNo.next(data.data.phone_number)
          this.auth.loginButton.next(false)
          if (data.data.user_type == 0){
              this.router.navigate(['home'])
          }if (data.data.user_type == 1){
            this.router.navigate(['admin'])
          }
          else{
            console.log("User Type error")
          }

        }else{
          console.log("login error")
        }
      })
  }

}
