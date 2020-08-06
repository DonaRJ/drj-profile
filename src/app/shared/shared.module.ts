import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    NgbProgressbarModule,
    ChartsModule,
  ],
  exports: [
    NavbarComponent,
    TranslateModule,
    NgbProgressbarModule,
    ChartsModule,
    FooterComponent
  ],
})
export class SharedModule {}
