import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private ngAuth: AngularFireAuth,private database: AngularFireDatabase) { }

  async registerNewUser(email:string, password:string){
    return await this.ngAuth.createUserWithEmailAndPassword(email.trim(),password.trim());
  }

  async addUserData_in_db(UserInfo:object,uid:string){
    await this.database.object('users/'+uid).set({
      UserInfo,
      _created: Date.now()
    });
  }


  async signInUser(email:string, password:string){
    return await this.ngAuth.signInWithEmailAndPassword(email.trim(),password.trim());
  }

  async signOut(){
    return await this.ngAuth.signOut();
  }

}
