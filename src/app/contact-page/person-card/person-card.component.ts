import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonCardComponent {
  @Input() public pictureUrl: string;
  @Input() public name: string;
  @Input() public functions: string[];
  @Input() public email: string;
}
