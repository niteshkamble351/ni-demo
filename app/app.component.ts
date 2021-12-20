import { BackButtonServiceService } from './service/back-button-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private BackButtonServiceService:BackButtonServiceService) {
    this.BackButtonServiceService.init();
  }
}
