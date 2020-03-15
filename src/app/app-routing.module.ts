import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorkComponent } from './pages/pork/pork.component';
import { ChickenComponent } from './pages/chicken/chicken.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/beef' },
  { path: 'beef', component: WelcomeComponent },
  { path: 'pork', component: PorkComponent },
  { path: 'chicken', component: ChickenComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'payment', component: PaymentComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
