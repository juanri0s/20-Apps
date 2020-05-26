import { Component, Input } from '@angular/core';
import { Route } from '../app.component';

@Component({
  selector: 'app-tab',
  styleUrls: ['./tab.component.css'],
  template: `
    <a
      class="route"
      routerLinkActive="active"
      [routerLink]="route?.path"
      #rla="routerLinkActive">
      {{ route?.label }}
    </a>
  `
})
export class TabComponent {
  @Input() route: Route;
}
