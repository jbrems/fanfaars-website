import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  @Input() size = 24;
  @Input() name:
    'house' |
    'calendar' |
    'picture' |
    'user' |
    'email' |
    'menu' |
    'clock' |
    'place' |
    'facebook' |
    'office';
}
