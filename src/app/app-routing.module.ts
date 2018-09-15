import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';

const routes: Routes = [
    {path: 'viewer', component: ImageViewerComponent},
    {path: '', component: ImageUploaderComponent}
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
