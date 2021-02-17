import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  @Input() type: string;
  @Input() message: string;
  @Input() spinningIcon = false;

  get iconName(): string {
    if (this.type === 'success') { return 'check'; }
    if (this.type === 'error') { return 'error'; }
    return 'info';
  }
}
