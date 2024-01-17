import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// feature modules.

@NgModule({ // root module, 
  declarations: [ // components, pipes and directives
    AppComponent
  ],
  imports: [
    BrowserModule // import other modules.
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
