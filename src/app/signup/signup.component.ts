import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, Validators}   from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signinform: FormGroup;
  constructor(private formbulider: FormBuilder, private router: Router, private httpclient: HttpClient) { }
  ngOnInit(): void {
    this.signinform = this.formbulider.group({
      name: ['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      mobileNo: ['',[Validators.required, Validators.pattern("^[6-9]{1}[0-9]{9}"), ]],
      email : ['',[Validators.required,Validators.pattern(("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"))]],
      password: ['',Validators.required],
      cpassword:['',Validators.required]

    })
  }
  signin() {
    this.httpclient.post<any>('http://localhost:3000/comments', this.signinform.value).subscribe(data => {
      alert("sigin successfull");
      this.signinform.reset();
      this.router.navigate(['/login']);
    })
  }
    }
    
   
