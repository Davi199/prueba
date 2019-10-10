import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }from '@angular/forms';
import { HttpClientModule }from '@angular/common/http';
import { PersonaService } from '@app/common/services/persona.service'
import { PersonasListComponent } from './core/components/personas-list/personas-list.component';
import { PersonasCreateComponent } from './core/components/personas-create/personas-create.component';
import { PersonasUpdateComponent } from './core/components/personas-update/personas-update.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasListComponent,
    PersonasCreateComponent,
    PersonasUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
