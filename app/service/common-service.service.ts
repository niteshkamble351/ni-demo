import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private toastController: ToastController, public loadingController: LoadingController) { }


  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1700
    });
    toast.present();
  }

  async simpleLoader(message:string) {
    const loader = await this.loadingController.create({
      message:message
    }).then((response) => {
        response.present();
    });
}

async dismissLoader() {
  const loader = await this.loadingController.dismiss().then((response) => {
  }).catch((err) => {
      console.log('Error occured : ', err);
  });
  
}

}
