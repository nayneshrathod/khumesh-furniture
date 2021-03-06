import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
    title= 'Contact Us';
    
  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }


}
