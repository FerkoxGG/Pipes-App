import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";

// Configuración del locale de la app
import localeESCL from "@angular/common/locales/es-CL";
import localeFRCA from "@angular/common/locales/fr-CA";

import { registerLocaleData } from "@angular/common";

registerLocaleData(localeESCL);
registerLocaleData(localeFRCA);

@NgModule({
  declarations: [AppComponent],
  providers: [
    {
      // Cambiar el local de la aplicación
      provide: LOCALE_ID,
      useValue: "es-CL"
    }
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ]
})
export class AppModule {}
