import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users : any;
 

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
  
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }

  // getUser(){
  //   this.users = this.accountService.getUsers();

  // }

}
