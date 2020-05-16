import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompradorRoutingModule } from './comprador-routing.module';
import { MainComponentsModule } from '../../main-components/main-components.module';

import { HomeComponent } from './home/home.component';
import { ComprarComponent } from './comprar/comprar.component';



@NgModule({
  declarations: [HomeComponent, ComprarComponent],
  imports: [
    CommonModule,
    CompradorRoutingModule,
    MainComponentsModule
  ]
})
export class CompradorModule { }
