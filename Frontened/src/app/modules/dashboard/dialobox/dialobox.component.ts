import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialobox',
  templateUrl: './dialobox.component.html',
  styleUrls: ['./dialobox.component.scss']
})
export class DialoboxComponent implements OnInit{

  submitted = false;
  ngOnInit(): void {
    
  }

  popup_form = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    passowrd: new FormControl('',[Validators.required])
  })

  get f():any{
    return this.popup_form.controls;
  }



  frm_submit(){
    this.submitted = true;
    if(this.popup_form.invalid){
      return
    }
    console.log(this.popup_form.value);
   
  }


}
