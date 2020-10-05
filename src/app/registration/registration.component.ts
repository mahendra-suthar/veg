import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../appService/auth-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm:FormGroup;
  constructor(private auth:AuthServiceService, private router:Router) { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      'first_name': new FormControl(null),
      'last_name': new FormControl(null),
      'phone_number': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null),
      'user_type': new FormControl(null)
    })

  }
  onSubmit(){
    console.log(this.regForm.value)
    this.auth.registration(this.regForm.value).subscribe(
      (data)=>{console.log(data)
        if (data.success){
        this.router.navigate(['/login'])
        }else{
          console.log("registration error")
        }
      }
    )
  }
}
