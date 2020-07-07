import {async, TestBed} from '@angular/core/testing';

import {QuoteAllComponent} from './quote-all.component';
import {QuoteService} from '../service/quote.service';

describe('QuoteAllComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuoteAllComponent
      ], providers: [
        {provide: QuoteService, quoteService: {}}
      ]
    }).compileComponents();
  }));

  it('should create', () => {
  const fixture = TestBed.createComponent(QuoteAllComponent);
  const quoteAll = fixture.componentInstance;
  expect(quoteAll).toBeTruthy();
});
});
