import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { CommonServiceService } from './../../service/common-service.service';
import { AuthServiceService } from './../../service/auth-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public aFormGroup!: FormGroup;
  public email:string="";
  public password:string=" ";

  constructor( private formBuilder: FormBuilder,
    private AuthServiceService:AuthServiceService,
    private AngularFireAuth:AngularFireAuth,
    private CommonServiceService:CommonServiceService,
    private router:Router) { }

  ngOnInit() {
    this.checkUser();
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }


  async SignIn(){
    if(this.email.trim()!=""&&this.password.trim()!=""){
      const loader = this.CommonServiceService.simpleLoader("Signing in");
      await loader.then(()=>{
        const resLogin = this.AuthServiceService.signInUser(this.email,this.password);
        resLogin.then((res)=>{
        console.log(res);
        this.CommonServiceService.dismissLoader();
        this.CommonServiceService.presentToast("Signed in");
        this.router.navigateByUrl('/main-screen',{replaceUrl:true});
      }).catch((e)=>{
        this.CommonServiceService.dismissLoader();
        const dismiss= this.CommonServiceService.presentToast(e);
      })
    })
      
    }else{
      this.CommonServiceService.presentToast("All fileds are required");
    }
  }

  checkUser(){
   this.AngularFireAuth.user.subscribe(user=>{
      if(user!=null){
        console.log(user);
        this.router.navigateByUrl('/main-screen',{replaceUrl:true});
      }else{
        console.log("user does not exist");
      }
    });
  }



  gotoSignUp(){
    this.router.navigateByUrl('/register');
  }

  siteKey:string="6LdHNawdAAAAAE0QBjonfjcVUN2JvcjIocUYnG2-";
}
