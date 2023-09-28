import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../../../Service/myservice.service';




@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit{
  user:any;
  submitted = false;
  constructor(private myService: MyserviceService) { 
    this.myService.users().subscribe((data)=>{
      console.log(data);
      this.user= data;
    })
  }


 
  ngOnInit(): void {
    
    console.log("Hey There ngOnit is Called");
    
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
