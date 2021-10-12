import {Component} from "@angular/core";

@Component({
  selector: 'some-tag',
  template: `
    <div>
      <h1> Hello World </h1>
      <app-nova-poshta></app-nova-poshta>
  </div>`
})

export class myComponent {
  name = '';
}

