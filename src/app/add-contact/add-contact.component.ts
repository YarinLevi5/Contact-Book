import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  @Input() name: string = '';
  @Input() age: number = 0;
  @Output() newContactEvent = new EventEmitter<object>();

  btnAddContact(name: string, age: string) {
    this.newContactEvent.emit({ name, age });
  }

  constructor() {}

  ngOnInit(): void {}
}
