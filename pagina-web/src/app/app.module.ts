import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { InfopaginaComponent } from './infopagina/infopagina.component';
import { FooterComponent } from './footer/footer.component';
import { SeccionayudaComponent } from './seccionayuda/seccionayuda.component';
import { app_routing } from './app.rutas';
import { ProductunoComponent } from './Ejemplos productos/productuno/productuno.component';
import { ProductdosComponent } from './Ejemplos productos/productdos/productdos.component';
import { ProducttresComponent } from './Ejemplos productos/producttres/producttres.component';
import { ProductcuatroComponent } from './Ejemplos productos/productcuatro/productcuatro.component';
import { ProductcincoComponent } from './Ejemplos productos/productcinco/productcinco.component';
import { ProductseisComponent } from './Ejemplos productos/productseis/productseis.component';
import { ProductsieteComponent } from './Ejemplos productos/productsiete/productsiete.component';
import { ProductochoComponent } from './Ejemplos productos/productocho/productocho.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    InfopaginaComponent,
    FooterComponent,
    SeccionayudaComponent,
    ProductunoComponent,
    ProductdosComponent,
    ProducttresComponent,
    ProductcuatroComponent,
    ProductcincoComponent,
    ProductseisComponent,
    ProductsieteComponent,
    ProductochoComponent,
    IniciosesionComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
