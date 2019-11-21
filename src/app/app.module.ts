import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from        './app-routing.module';
import { AppComponent } from            './app.component';

import { HeaderComponent } from         './header/header.component';
  import { HeaderMenuComponent } from     './header-menu/header-menu.component';

import { MainComponent } from           './pages/main/main.component';
import { CatalogComponent } from        './pages/catalog/catalog.component';

import { FooterComponent } from         './footer/footer.component';

import { DividerComponent } from        './common/divider/divider.component';
import { CardComponent } from           './common/card/card.component';
import { BreadcrumbsComponent } from    './common/breadcrumbs/breadcrumbs.component';
import { SlickCarouselModule } from     'ngx-slick-carousel';
import { ProductComponent } from './pages/product/product.component';
import { NewsComponent } from './pages/news/news.component';
import { SertificatsComponent } from './pages/sertificats/sertificats.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMenuComponent,
    FooterComponent,
    BreadcrumbsComponent,
    MainComponent,
    DividerComponent,
    CardComponent,
    CatalogComponent,
    ProductComponent,
    NewsComponent,
    SertificatsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
