import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() links: { title: string, url?: string}[];
  @Input() group: 'ff' | 'mm' | 'mr' | 'f4f' = 'ff';
}
