import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgButtonComponent } from './ng-button/ng-button.component';

@NgModule({
  declarations: [NgButtonComponent],
  imports: [BrowserModule, NoopAnimationsModule, MatButtonModule],
  entryComponents: [NgButtonComponent],
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const webComponent = createCustomElement(NgButtonComponent, { injector });
    customElements.define('ng-button', webComponent);
  }

  ngDoBootstrap() {}
}
