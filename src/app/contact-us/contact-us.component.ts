import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contacts = [
    {
      id: 1,
      name: 'mail',
    },
    {
      id: 2,
      name: 'locationEgypt',
    },
    { id: 3, name: 'locationDubai' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
