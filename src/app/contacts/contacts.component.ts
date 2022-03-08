import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from './contact/contact';

@Component({
  selector: 'all-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private service: ContactService) {
    this.contacts = service.getContacts();
    this.contactEvent = service.addContact();
  }

  contactEvent(event: object) {
    this.contacts.push(event);
    console.log(this.contacts);
  }

  ngOnInit(): void {}
}
