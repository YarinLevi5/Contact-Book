import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'one-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input() name: string = '';
  @Input() age: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
