import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  submitted=false;

  ngOnInit(): void {
    
  }

  register = new FormGroup({
    fname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    pass: new FormControl('',[Validators.required])

  });

  get f():any{
    return this.register.controls;
  }

  regform(){
   this.submitted = true;
   if(this.register.invalid){
    return
  }
   console.log(this.register.value);
  }

}
