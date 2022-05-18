import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";  
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit { 
  
  isDisablednic:boolean = true;
  isDisabledaddress:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  enableuser(){
    this.isDisablednic = true
    this.isDisabledaddress=false
 }
 enableadmin(){
    this.isDisablednic = false 
    this.isDisabledaddress=true
  }

}
