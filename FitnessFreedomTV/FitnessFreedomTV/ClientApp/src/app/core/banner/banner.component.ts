import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  images: any[] = [];

  constructor() { 
    this.images = [
      {
        id: 1,
        path: "https://picsum.photos/900/500?random&t=0.2086495580583243",
        title: "First slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
      },
      {
        id: 2,
        path: "https://picsum.photos/900/500?random&t=0.936830025834458",
        title: "Second slide label",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 3,
        path: "https://picsum.photos/900/500?random&t=0.38806923939947824",
        title: "Third slide label",
        description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
      }
    ];
  }

  ngOnInit() {
  }

}
