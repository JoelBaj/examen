import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    miFormulario: FormGroup = this.fb.group({
      email:['test1@test.com', [Validators.required, Validators.email]],
      password:['123456', [Validators.required, Validators.minLength(6)]]
    })
    
    constructor(private fb: FormBuilder, private router:Router) { 

    }
    login() { 
       this.router.navigate(['./poetry/pages/selectores'])
      //this.router.navigate(['./poetry/pages/menu'])
     
      

    
    }
}
