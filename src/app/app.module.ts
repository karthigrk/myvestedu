import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PromoComponent } from './promo/promo.component';
import { CalloutComponent } from './callout/callout.component';
import { EventblockComponent } from './eventblock/eventblock.component';
import { CounterComponent } from './counter/counter.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CarouselComponent,
    PromoComponent,
    CalloutComponent,
    EventblockComponent,
    CounterComponent,
    BlogsComponent,
    TestimonyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
