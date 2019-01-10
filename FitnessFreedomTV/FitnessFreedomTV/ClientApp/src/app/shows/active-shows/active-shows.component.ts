import { Component, OnInit,  } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ImageModalComponent } from 'src/app/modals/image-modal/image-modal.component';

@Component({
  selector: 'app-active-shows',
  templateUrl: './active-shows.component.html',
  styleUrls: ['./active-shows.component.css']
})
export class ActiveShowsComponent implements OnInit {
  private imagesJson: any;

  constructor(private testServices: TestService, private modalService: NgbModal) { }
  
  ngOnInit() {
    this.testServices.getImagesJson()
      .subscribe((data) => {
        this.imagesJson = data;
      },
      (error) => {
        this.imagesJson = [];
      });
  }

  open(path: string, title: string){
    debugger;
    const modalRef = this.modalService.open(ImageModalComponent, { size: 'lg' });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.path = path;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
