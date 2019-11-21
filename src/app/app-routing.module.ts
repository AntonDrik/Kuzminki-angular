import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./pages/main/main.component";
import {CatalogComponent} from "./pages/catalog/catalog.component";
import {ProductComponent} from "./pages/product/product.component";
import {NewsComponent} from "./pages/news/news.component";
import {SertificatsComponent} from "./pages/sertificats/sertificats.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'catalog',
    component: CatalogComponent,
    data: {
      breadcrumb: 'Каталог'
    },
    children: [
      {
        path: ':id',
        component: ProductComponent,
        data: {
          breadcrumb: null
        },
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'product/:id',
    redirectTo: 'catalog/:id'
  },
  {
    path: 'news',
    component: NewsComponent,
    data: {
      breadcrumb: 'Новости'
    }
  },
  {
    path: 'sertificats',
    component: SertificatsComponent,
    data: {
      breadcrumb: 'Сертификаты'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
