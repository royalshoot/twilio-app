import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/common/global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showphoneNumber=false;
  loginForm = this.fb.group({
    username:['',Validators.required],
    password: ['',Validators.required]
  });;

  PhoneForm = this.fb.group({
    phonenumber:['',Validators.required],
  });;
  constructor(private fb: FormBuilder, private _router: Router) {
    
   }
  
  ngOnInit(): void {
    new LocalStorage().remove("accountId");
    new LocalStorage().remove("PhoneNumber");
  }

  get username() {return this.loginForm.get('username');}
  get password() {return this.loginForm.get('password');}
  get phonenumber() {return this.loginForm.get('phonenumber');}

  onSubmit(){
    let obj = this.loginForm.value;
    if(!this.loginForm.invalid){
      if(obj.username =="admin@example.com" && obj.password=="ABC123"){
        new LocalStorage().set("accountId", "3");
        new LocalStorage().set("PhoneNumber", "admin");
        this._router.navigate(['/main'])
      }else{
        alert('incorrect username/password');
      } 
    }else{
      alert('Please fill all fields')
    }
    
  }

  onPhoneSubmit(){
    let obj = this.PhoneForm.value;
    if(!this.PhoneForm.invalid){
      new LocalStorage().set("PhoneNumber", obj.phonenumber);
      this._router.navigate(['/access-request'])
    }
  }

  phonelogin()
  {
    this.showphoneNumber=true;
  }
}
