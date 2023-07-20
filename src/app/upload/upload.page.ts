import { Component, OnInit } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})

export class UploadPage implements OnInit {

  constructor(public photoService: PhotoService, ) { }
  
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  ngOnInit() {  
  }

}
