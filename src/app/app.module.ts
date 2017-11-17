import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { AvionesService } from './services/api.services';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AvionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
