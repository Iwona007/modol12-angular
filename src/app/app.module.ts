import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {QuoteAddComponent} from './quote-add/quote-add.component';
import {QuoteAllComponent} from './quote-all/quote-all.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RoutingModule} from './routing.module';
import {QuoteService} from './service/quote.service';

@NgModule({
  declarations: [
    AppComponent,
    QuoteAddComponent,
    QuoteAllComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    // RouterModule.forRoot([
    //   {
    //     path: 'quote-add',
    //     component: QuoteAddComponent
    //   },
    //   {
    //     path: 'quote-all',
    //     component: QuoteAllComponent
    //   }
    // ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
