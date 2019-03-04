import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatSelectModule, MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RecepcionComponent } from './componentes/recepcion/recepcion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecepcionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,    
    MatToolbarModule,
    MatCardModule, 
    MatFormFieldModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
