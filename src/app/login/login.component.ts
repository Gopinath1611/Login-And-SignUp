import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder,  } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup;

  constructor(private frombuild:FormBuilder,
    private httpclient:HttpClient,
    private route:Router,
    ) { }


  ngOnInit(): void {
    
    this.loginform=this.frombuild.group(
      {
      email:new FormControl(''),
      password:new FormControl('')
    }
    );
  }
  login(){
  this.httpclient.get<any>("http://localhost:3000/comments").subscribe(res=>{
    const user=res.find((a:any)=>{console.log(res);
      return a.email=== this.loginform.value.email && a.password === this.loginform.value.password;
  });
  if(user){
    alert('login Sucessfully');
    this.loginform.reset();
    this.route.navigate(['dashboard']);
  }

else {
  alert('YOU ARE NOT AUTHORISED LOGIN USER ');
}
})
}

}

