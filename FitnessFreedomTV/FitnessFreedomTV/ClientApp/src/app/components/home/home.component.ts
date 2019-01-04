import { Component, OnInit } from '@angular/core';
//import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //private images: any;
  //private imagesJson: any;

  constructor(/*private testService: TestService*/) { }

  ngOnInit() {
    //debugger;
    //this.testService.getImages()
    //  .subscribe((data) => {
    //    this.images = data;
    //  },
    //  (error) => {
    //    this.images = [];
    //  });

    //this.testService.getImagesJson()
    //  .subscribe((data) => {
    //    this.imagesJson = data;
    //  },
    //    (error) => {
    //      this.imagesJson = [];
    //    });
  }

}
