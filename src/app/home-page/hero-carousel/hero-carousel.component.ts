import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss'],
})
export class HeroCarouselComponent {
  carouselOptions: OwlOptions = {
    items: 1,
    loop: true,
    dots: true,
    dotsSpeed: 1000,
    nav: true,
    navText: ['<', '>'],
    navSpeed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    autoplayTimeout: 7500,
  };
}
