import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private translateService: TranslateService) { }

  ngOnInit(): void { }

  downloadResume() {
    const pdfUrl = '../../../assets/docs/Dona_Resume.pdf';
    const pdfName = 'Dona_Resume';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  goToLink(account) {
    window.open("www.linkedin.com/in/dona-rani-jose", "_blank");
  }
}
