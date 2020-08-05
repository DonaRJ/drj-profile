import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  projectDetails: any;

  constructor(
    private modalService: NgbModal,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {}

  openScrollableContent(content, index) {
    this.projectDetails = this.translateService.instant(
      'portfolio.recent_projects'
    )[index];
    this.modalService.open(content, {
      scrollable: true,
      size: 'lg',
    });
  }
}
