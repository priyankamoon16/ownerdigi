import { Component, OnInit } from '@angular/core';
import { RicohView } from 'ricoh-theta-viewer';

@Component({
  selector: 'app-threesixtyview',
  templateUrl: './threesixtyview.component.html',
  styleUrls: ['./threesixtyview.component.scss']
})
export class ThreesixtyviewComponent implements OnInit {
  ricohView:any;
  constructor() {}

  ngOnInit() {
    this.ricohView = new RicohView({ "id": "ricoh-360-viewer", "file":  "assets/360view.JPG" , "rendererType": 0, "height": 700, "width": 1500, "zoom": 130 });
  }

}
