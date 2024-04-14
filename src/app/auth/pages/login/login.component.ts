import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
  loading = false;

  miFormulario: FormGroup = this.fb.group({
      email:['joel', [Validators.required]],
      password:['12345', [Validators.required]]
    })
    
    constructor(private fb: FormBuilder, private router:Router) { 

    }
  ngOnInit(): void {
    
  }

  
    login() { 
       this.router.navigate(['./poetry/pages/autor'])
      //this.router.navigate(['./poetry/pages/menu'])
     
    }
}
