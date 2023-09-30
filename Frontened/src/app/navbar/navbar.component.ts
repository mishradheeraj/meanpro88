import { Component, OnInit } from '@angular/core';
import { DialoboxComponent } from '../modules/dashboard/dialobox/dialobox.component';
import { MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.openemployeeform();
  }
  constructor(private _dialog: MatDialog){}

  openemployeeform(){
    this._dialog.open(DialoboxComponent);
  }
}
