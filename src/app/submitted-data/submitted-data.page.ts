import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { DataService } from '../data.service';

@Component({
  selector: 'app-submitted-data',
  templateUrl: './submitted-data.page.html',
  styleUrls: ['./submitted-data.page.scss'],
})
export class SubmittedDataPage {
  personalInfoList: any[] = [];
  selectedEntry: any = null; // Variable to store the selected entry for deletion

  constructor(
    private storage: Storage,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController, // Import the AlertController
    private dataService: DataService
  ) {}

  async ngOnInit() {
    await this.storage.create();
    await this.loadPersonalInfoList();
  }

  async loadPersonalInfoList() {
    const storedList = await this.storage.get('personalInfoList');
    if (storedList) {
      this.personalInfoList = storedList;
      // Add a 'selected' property to each entry to track selection (initialize to false)
      this.personalInfoList.forEach((info) => {
        info.selected = false;
      });
    }
  }

  async deletePersonalInfo() {
    const selectedEntries = this.personalInfoList.filter((info) => info.selected);

    if (selectedEntries.length === 0) {
      this.presentToast('Please select entries to delete.');
      return;
    }

    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: 'Are you sure you want to delete the selected entries?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: async () => {
            selectedEntries.forEach((selectedEntry) => {
              const index = this.personalInfoList.findIndex((info) => info.id === selectedEntry.id);
              if (index !== -1) {
                this.personalInfoList.splice(index, 1);
              }
            });

            await this.storage.set('personalInfoList', this.personalInfoList);
            this.presentToast('Selected entries deleted successfully.');
            this.clearSelection();
          },
        },
      ],
    });

    await alert.present();
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  clearSelection() {
    this.personalInfoList.forEach((info) => {
      info.selected = false;
    });
  }

  viewEntryDetails(entry: any) {
    this.router.navigate(['/view-info'], {
      state: {
        selectedEntry: entry,
      },
    });
  }

  viewAllInfo() {
    this.router.navigate(['/view-info']);
  }

  onFilesChange(event: any) {
    const selectedFiles: FileList = event.target.files;
    if (this.selectedEntry) {
      this.selectedEntry.files = Array.from(selectedFiles);
    }
  }
  async approveSubmission(index: number) {
    // Show confirmation dialog before updating the status
    const alert = await this.alertController.create({
      header: 'Confirm Verification',
      message: 'Are you sure you want to verify this submission?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Verification canceled.');
          },
        },
        {
          text: 'Verify',
          handler: () => {
            this.personalInfoList[index].status = 'Approved';
            this.savePersonalInfo();
          },
        },
      ],
    });

    await alert.present();
}
// Add the savePersonalInfo function to update the personalInfoList in storage
  async savePersonalInfo() {
    await this.storage.set('personalInfoList', this.personalInfoList);
    this.presentToast('Status updated successfully.');
  }
}
