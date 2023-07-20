import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.page.html',
  styleUrls: ['./view-info.page.scss'],
})
export class ViewInfoPage implements OnInit {
  personalInfoList: any[] = [];

  constructor(
    private storage: Storage,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      const navigationState = this.router.getCurrentNavigation()?.extras.state;
      if (navigationState) {
        this.personalInfoList = navigationState['personalInfoList'];
      }
    });
  }

  async ngOnInit() {
    await this.storage.create();
    this.loadPersonalInfoList();
  }

  async loadPersonalInfoList() {
    const storedList = await this.storage.get('personalInfoList');
    if (storedList) {
      this.personalInfoList = storedList;
    }
  }
  updateStatus(personalInfoList: any, status: string) {
    const index = this.personalInfoList.findIndex((entry) => entry.id === personalInfoList.id);

  if (index !== -1) {
    // Update the status of the selected entry
    this.personalInfoList[index].status = status;

    // Navigate back to the submitted-data page with the updated entry
    const navigationExtras = {
      state: {
        personalInfoList: this.personalInfoList,
      },
    };
    this.router.navigate(['/submitted-data'], navigationExtras);
  }
}
}
