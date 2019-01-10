import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from 'src/app/modals/login-modal/login-modal.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed: boolean = true;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  
open(title: string){
  const modalRef = this.modalService.open(LoginModalComponent, { size: 'lg' });
  modalRef.componentInstance.title = title;
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
