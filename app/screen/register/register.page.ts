import { AuthServiceService } from './../../service/auth-service.service';
import { CommonServiceService } from './../../service/common-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  UserInfo = {
    name: '',
    email: '',
   password: ''
  };

  constructor( private Router : Router,
     private CommonServiceService:CommonServiceService,
     private AuthServiceService: AuthServiceService,private ngAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async addUserTodb(uid:string){
    const dataop = this.AuthServiceService.addUserData_in_db(this.UserInfo, uid);
    await dataop.then(()=>{
      this.CommonServiceService.dismissLoader();
      this.CommonServiceService.presentToast("Account created successfully. Please Signin");
      this.Router.navigateByUrl('/login',{replaceUrl:true});
    }).catch(e=>{
      this.CommonServiceService.dismissLoader();
      this.CommonServiceService.presentToast(e);
    });
  }

  async registerUser(){
    const registration = this.AuthServiceService.registerNewUser(this.UserInfo.email
      ,this.UserInfo.password);

      await registration.then((res)=>{
        this.addUserTodb(res.user.uid);
      }).catch(e=>{
          this.CommonServiceService.dismissLoader();
          this.CommonServiceService.presentToast(e);
      });
  }

  async signUp(){
    if(this.UserInfo.name!=""&&this.UserInfo.email!=""&&this.UserInfo.password!=""){
      const loader = this.CommonServiceService.simpleLoader("Creating Account..");
      await loader.then(()=>{
        this.registerUser();
      })
    }else{
      this.CommonServiceService.presentToast("All fields are required !");
    }
  }

  async CreateAcc(){
    this.signUp();
  }

  gotoSignIn(){
    console.log('to sing-in page');
    this.Router.navigateByUrl('/login',{replaceUrl:true});
  }

}
