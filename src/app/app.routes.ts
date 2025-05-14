import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
  
    {
        path: 'products/:id',
        component: ProductDetailsComponent
    },
    {
        path: 'products/:id/edit',
        component: ProductFormComponent
    },
  
    {
        path: '**',
        component: NotfoundComponent
    }
];