import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, HttpClientModule, TranslateModule],
  exports: [NavbarComponent, TranslateModule],
})
export class SharedModule {}
