import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SingleContentProjectionComponent } from './content-projection/single-content-projection.component';
import { MultiContentProjectionComponent } from './content-projection/multi-content-projection.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleContentProjectionComponent,
    MultiContentProjectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
