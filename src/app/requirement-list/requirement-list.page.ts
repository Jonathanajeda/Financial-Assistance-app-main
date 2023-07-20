import { Component } from '@angular/core';
import { LogoutService } from '../auth/logout.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-requirement-list',
  templateUrl: './requirement-list.page.html',
  styleUrls: ['./requirement-list.page.scss']
})
export class RequirementListPage {

  constructor(private logoutService: LogoutService, private alertController: AlertController) { }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Confirm Logout',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Logout',
          handler: () => {
            // Call the logout method from the LogoutService
            this.logoutService.logout();
          }
        }
      ]
    });

    await alert.present();
  }
}

