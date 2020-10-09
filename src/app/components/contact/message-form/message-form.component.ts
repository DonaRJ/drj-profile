import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  contactForm: FormGroup;
  isSubmitted: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  isWarning: boolean;

  constructor(private contactService: ContactService, private formBuider: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuider.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: [''],
      message: ['', Validators.required]
    });
  }

  sendMessage() {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      this.contactService.saveMessage(this.contactForm.value).subscribe((data) => {
        if (data) {
          this.isSuccess = false;
          this.isSubmitted = false;
          this.contactForm.reset();
        }
      }, (error) => {
        this.isFailed = true;
      });
    }
  }

}
