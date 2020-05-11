import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { ImageCarrouselComponent } from './image-carrousel/image-carrousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    FooterComponent,
    FormProductoComponent,
    ImageCarrouselComponent,
    NavBarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    FooterComponent,
    FormProductoComponent,
    ImageCarrouselComponent,
    NavBarComponent,
  ],
})
export class MainComponentsModule {}
