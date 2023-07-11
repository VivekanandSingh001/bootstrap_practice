import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username="";
  useremail="";
  errorMsg="";
  constructor(private auth:AuthService,private router:Router){}
  login(){
    if(this.username.trim().length===0){
      this.errorMsg="User name is required";
    }else if(this.useremail.trim().length===0){
this.errorMsg="User Email is required";
    }else{
      this.errorMsg="";
      let res=this.auth.login(this.username,this.useremail);
      if(res===200){
        this.router.navigate(['home']);
      }else if(res===403){
this.errorMsg="Invalid Credentails";
      }
    }
  }
}
