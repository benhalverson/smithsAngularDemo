import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { LOCAL_STORAGE, StorageService, isStorageAvailable } from 'ngx-webstorage-service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit, AfterViewInit {
  public context: CanvasRenderingContext2D;
  @ViewChild('mycanvas') mycanvas;
  preview(e: any): void {
    const canvas = this.mycanvas.nativeElement;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, 300, 300);

    // show image to canvas
    const render = new FileReader();
    render.onload = (event: any) => {
      const img = new Image();
      img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img, 0, 0);
      };
      img.src = event.target.result;
    };
    render.readAsDataURL(e.target.files[0]);
    this.convertBufToStr(render.result);
    localStorage.setItem('imageStore', render.result);
    debugger;
  }
  convertBufToStr(buf): string {
    debugger;
    return String.fromCharCode.apply(null, new Uint16Array(buf));
  }

  convertStrToBuf(str) {
    const buf = new ArrayBuffer(str.length * 2);
    const bufView = new Uint16Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    debugger;
    return buf;
  }
  ngOnInit() {}

  ngAfterViewInit() {
  }

}
