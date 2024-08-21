import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConsultaCnpjComponent } from './components/consulta-cnpj/consulta-cnpj.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CnpjFormatPipe } from './pipes/cnpj-format.pipe';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, ConsultaCnpjComponent, CnpjFormatPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    ToastrModule.forRoot({
      toastClass: 'ngx-toastr toast-error', // Classe CSS padrão para toasts de erro
      positionClass: 'toast-top-right', // Posição dos toasts
      preventDuplicates: true, // Evitar toasts duplicados
    }),
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
