import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { PorkComponent } from './pages/pork/pork.component';
import { ChickenComponent } from './pages/chicken/chicken.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { FullServiceService } from './full-service.service';
import { Http, HttpModule } from '@angular/http';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PorkComponent,
    ChickenComponent,
    WelcomeComponent,
    ShoppingCartComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, FullServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
