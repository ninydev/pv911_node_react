import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { myComponent } from './MyComponent/my.component';
import { NovaPoshtaComponent } from './MyComponent/nova-poshta/nova-poshta.component';

@NgModule({
  declarations: [
    AppComponent,
    myComponent,
    NovaPoshtaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [myComponent]
})
export class AppModule { }
