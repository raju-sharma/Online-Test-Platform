import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
 
  username:string='';
  password:string='';
  error:string='';
  constructor(private router:Router) { }

  ngOnInit() {
  }
 
  handleChange()
  {
    this.error='';
  }
  login(e,username,password)
  {
    if(this.username=='' || this.password=='')
    {
      this.error='username or password cannot be black'
    }
    else if(this.username=='admin' && this.password=="admin123")
    {
    this.router.navigate(['/test']);
    }
    else
    {
      this.error='username or password is incorrect'
    }
  }

}
