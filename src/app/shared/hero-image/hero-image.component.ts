import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss']
})
export class HeroImageComponent implements OnInit {
  @Input() group: 'FF' | 'MM' | 'MR' | 'F4F';
  @Input() image: string;
  @Input() quote: string;
  @Input() buttonLabel: string;
  @Input() buttonLink: string;

  buttonFragment?: string;

  constructor() { }

  ngOnInit() {
    const buttonLinkParts = this.buttonLink.split('#');
    this.buttonLink = buttonLinkParts[0];
    this.buttonFragment = buttonLinkParts[1];
  }

}
