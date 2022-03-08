import { Injectable } from '@angular/core';
import { Contact } from './contacts/contact/contact';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  private contacts: Contact[] = [];
  addContact(contact: Contact) {
    return this.contacts.push(contact);
  }
  getContacts(): Contact[] {
    return this.contacts;
  }
}
