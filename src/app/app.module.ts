import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { StoreFirstGuardService } from './store-first-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, StoreModule,
    RouterModule.forRoot([
      { path: 'store', component: StoreComponent, canActivate: [StoreFirstGuardService] },
      { path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuardService] },
      { path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuardService] },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [StoreFirstGuardService] },
      { path: '**', redirectTo: '/store' }
    ])
  ],
  providers: [StoreFirstGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
