import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-button',
  templateUrl: './ng-button.component.html',
  styleUrls: ['./ng-button.component.scss'],
})
export class NgButtonComponent {
  @Input()
  label = 'Click me!';
}
