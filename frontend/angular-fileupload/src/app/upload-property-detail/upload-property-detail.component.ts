import { Component, ElementRef, OnInit } from '@angular/core';
import { Marzipano } from 'marzipano';

@Component({
  selector: 'app-upload-property-detail',
  templateUrl: './upload-property-detail.component.html',
  styleUrls: ['./upload-property-detail.component.scss']
})
export class UploadPropertyDetailComponent {
  pano: any;
  viewer: any;
  currentSceneName: any;
  maxSize: any;
  maxDimensions: string;
  scene: any;


  ngOnInit(): void {


  }

}
