import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../../../Service/myservice.service';



@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit{

  ngOnInit(): void {
    console.log("Hey There ngOnit is Called");
  }

  user:any;
  submitted = false;
  constructor(private myService: MyserviceService) { 
    this.myService.users().subscribe((data)=>{
      console.log(data);
      this.user= data;
    });
  }



  popup_form = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    passowrd: new FormControl('')
  })

  frm_submit(){
    console.log(this.popup_form.value);
  }

  


  popupform =  new FormGroup({
    username: new FormControl('',[Validators.required]),
    useremail: new FormControl('',[Validators.required]),
    userpassword: new FormControl('',[Validators.required])

  })



  get f ():any{
    return this.popupform.controls;
  }

  submitpopup(){
    this.submitted = true;
    if(this.popupform.invalid){
      return
    }

     console.log(this.popupform.value);
     this.popupform.reset();
  }






}
