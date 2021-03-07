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
  loginForm = this.fb.group({
    username:['',Validators.required],
    password: ['',Validators.required]
  });;
  constructor(private fb: FormBuilder, private _router: Router) {
    
   }
  
  ngOnInit(): void {
    new LocalStorage().remove("accountId");
  }

  get username() {return this.loginForm.get('username');}
  get password() {return this.loginForm.get('password');}
  onSubmit(){
    
    let obj = this.loginForm.value;
    if(!this.loginForm.invalid){
      if(obj.username =="admin@example.com" && obj.password=="ABC123"){
        new LocalStorage().set("accountId", "3");
        this._router.navigate(['/main'])
      }else{
        alert('incorrect username/password');
      } 
    }else{
      alert('Please fill all fields')
    }
    
  }
}
