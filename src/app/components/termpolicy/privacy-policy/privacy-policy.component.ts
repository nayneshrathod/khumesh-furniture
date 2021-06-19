import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
title = 'Privacy Policy  ';
  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }



}
