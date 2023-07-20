import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage {
  personalInfo: any = {
    name: '',
    email: '',
    phone: '',
    files: [] // Array to store uploaded files
  };

  personalInfoFormSubmitted = false;

  constructor(
    private storage: Storage,
    private router: Router,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    await this.storage.create();
  }

  async savePersonalInfo() {
    this.personalInfoFormSubmitted = true;

    // Check if the form is valid
    if (this.isPersonalInfoFormValid()) {
      this.personalInfo.id = Date.now(); // Generate a unique ID for the entry

      const fileInput: HTMLInputElement | null = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput && fileInput.files) {
        this.personalInfo.files = Array.from(fileInput.files);
      }

      const storedList = await this.storage.get('personalInfoList');
      let personalInfoList: any[] = [];
      if (storedList) {
        personalInfoList = storedList;
      }

      personalInfoList.push(this.personalInfo);

      await this.storage.set('personalInfoList', personalInfoList);

      this.resetForm();
      this.presentToast('Personal information submitted successfully.');
    } else {
      this.presentToast('Please fill in all required fields.');
    }
  }

  resetForm() {
    this.personalInfo = {
      name: '',
      email: '',
      phone: '',
      files: [] // Clear the uploaded files
    };
    this.personalInfoFormSubmitted = false; // Reset the form submission flag
  }

  isPersonalInfoFormValid() {
    return (
      this.personalInfo.name.trim() !== '' &&
      this.personalInfo.email.trim() !== '' &&
      this.personalInfo.phone.trim() !== ''
      // Add additional validation if needed
    );
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  onFilesChange(event: NgxFileDropEntry[]) {
    for (const droppedFile of event) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.personalInfo.files.push(file);
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        // Handle folder upload (not supported by all browsers)
        // You can implement a recursive function to handle nested files in folders.
        console.log('Folder upload is not supported on all browsers.');
      }
    }
  }
}
