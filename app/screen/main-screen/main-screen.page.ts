import { CommonServiceService } from './../../service/common-service.service';
import { AuthServiceService } from './../../service/auth-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';

import { Platform, AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit {
  constructor(private AuthServiceService:AuthServiceService,
    private router:Router, 
    private CommonServiceService:CommonServiceService) {

    }

  ngOnInit() {
  }

  async SignOut(){
    const res = this.AuthServiceService.signOut();
    await res.then((res)=>{
      this.CommonServiceService.presentToast("Signed out");
      this.router.navigateByUrl('/login',{replaceUrl:true});
    }).catch(e=>{
      this.CommonServiceService.presentToast(e);
    });
  }

}
