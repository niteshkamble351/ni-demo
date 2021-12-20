import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackButtonServiceService {

  init(){

    this.Platform.backButton.subscribeWithPriority(10,()=>{
      const url = this.router.url; 
      if(url === '/main-screen' || url==='/login'){
        navigator['app'].exitApp();
      }else{
        this.navController.back();
      } 
    });
  }


  constructor(private Platform:Platform,private router:Router, private navController:NavController) { }
}
