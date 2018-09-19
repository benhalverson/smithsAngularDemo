import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  constructor() { }

  getPhoto() {
    const base64 = localStorage['file'];
    const base64Parts = base64.split(',');
    const fileFormat = base64Parts[0].split(',')[1];
    const fileContent = base64Parts[1]
    const file = new File([fileContent], 'file name here', {type: fileFormat});
    return file;
  }
  ngOnInit() {
  }

}
