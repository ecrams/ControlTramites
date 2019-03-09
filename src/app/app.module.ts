import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatSelectModule, MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import {MatDatepickerModule} from '@angular/material';
import {  MatNativeDateModule} from '@angular/material';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RecepcionComponent } from './componentes/recepcion/recepcion.component';
import { RevisionComponent } from './componentes/revision/revision.component';
import { ObservacionComponent } from './componentes/observacion/observacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecepcionComponent,
    RevisionComponent,
    ObservacionComponent
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
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

    MatDatepickerModule,

    AppRoutingModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
