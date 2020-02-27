import { AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class ScrollToMeespelenComponent implements AfterViewChecked {
  @ViewChild('meespelen') meespelen: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewChecked(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment === 'meespelen') { this.scrollToMeespelen(); }
    });
  }

  scrollToMeespelen() {
    const scrollTo = this.meespelen.nativeElement.getBoundingClientRect().top - 75;
    window.scrollTo({ top: scrollTo, behavior: 'smooth' });
  }
}
