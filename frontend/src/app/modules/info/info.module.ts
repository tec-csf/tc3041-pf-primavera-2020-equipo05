import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { MainComponentsModule } from '../../main-components/main-components.module';

import { ContactoComponent } from './contacto/contacto.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ContactoComponent, NewsFeedComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    MainComponentsModule,
    HttpClientModule,

  ],
})
export class InfoModule {}
