import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms'
import { StoreService } from '../services/store.service';
import {Route, Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor( private service:StoreService,private route:Router){

  }
  regForm=new FormGroup({
    username:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)


  })
  register(){
    if(this.regForm.valid){
      let data = this.regForm.value
      console.log(data);
      this.service.signUp(data).subscribe(data=>{console.log(data)
        this.route.navigateByUrl("")
    })
      
    }
  }

}
