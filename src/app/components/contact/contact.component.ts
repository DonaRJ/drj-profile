import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  // contactForm: FormGroup;

  constructor(private contactService: ContactService, private formBuider: FormBuilder) {}

  ngOnInit(): void {
    // this.contactForm = this.formBuider.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', Validators.required],
    //   phoneNumber: [''],
    //   message: ['', Validators.required]
    // });
    this.contactService.getSavedMessages().subscribe((data) => {
      console.log('Messages====', data);
    });
  }

  // sendMessage() {
  //   this.contactService.saveMessage(this.contactForm.value).subscribe((data) => {
  //     console.log('Messages====', data);
  //   });
  // }
}
