import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuoteAddComponent} from './quote-add/quote-add.component';
import {QuoteAllComponent} from './quote-all/quote-all.component';


const routes: Routes = [
  {
    path: 'quote-add',
    component: QuoteAddComponent
  },
  {
    path: 'quote-all',
    component: QuoteAllComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
