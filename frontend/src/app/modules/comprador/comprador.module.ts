import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompradorRoutingModule } from './comprador-routing.module';
import { MainComponentsModule } from '../../main-components/main-components.module';

import { HomeComponent } from './home/home.component';
import { ComprarComponent } from './comprar/comprar.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [HomeComponent, ComprarComponent, CarritoComponent],
  imports: [
    CompradorRoutingModule,
    CommonModule,
    MainComponentsModule,
    HttpClientModule,
  ]
})
export class CompradorModule { }
