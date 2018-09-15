import { Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE, StorageService, isStorageAvailable } from 'ngx-webstorage-service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {
  public fileToUpload: File = null;
  constructor() {}

  handleFileInput(files: FileList) {
    function _existing() {
      let existingEntries = JSON.parse(localStorage.getItem('image'));
      if (existingEntries === null) {
        existingEntries = [];
      }
    }
    this.fileToUpload = files.item(0);
    console.log(`file to upload `, files);
    console.log(`File size in bytes`, files[0].size);
    localStorage.setItem('', '');
    console.log(typeof(files.item(0)));
  }
  ngOnInit() {}

}
