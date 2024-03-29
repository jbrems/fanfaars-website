import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input() size = 24;
  @Input() name: string;
  @Input() viewbox = '0 0 24 24';
}
