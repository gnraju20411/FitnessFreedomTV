import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './banner/banner.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    EmailComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    EmailComponent
  ]
})
export class CoreModule { }
