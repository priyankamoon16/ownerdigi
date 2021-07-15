
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-property-detail',
  templateUrl: './view-property-detail.component.html',
  styleUrls: ['./view-property-detail.component.scss']
})

export class ViewPropertyDetailComponent implements OnInit {
  ricohView: any;
  constructor() {

  }

  ngOnInit(): void {




  }
  get360View(fileurl){
    console.log("dfhdhfdfdg",fileurl)
  }


}
