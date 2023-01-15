import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/service/web3/web3.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

 
  loggedInWithMask:boolean=false
  user:any;

  constructor
  (
   
    private web3:Web3Service,
   
  )
  {}


  ngOnInit(): void {

    //reconnect in case of lost connection
    this.web3.LoginWithMetaMask();

   

    
  }


 

  connectWallet(){
    console.log("Connecting to wallet");
    this.web3.LoginWithMetaMask();
  }

}
