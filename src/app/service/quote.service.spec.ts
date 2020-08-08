import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {QuoteService} from './quote.service';
import {HttpClient} from '@angular/common/http';


describe('QuoteService', () => {
  const http: HttpClient = {} as HttpClient; // masz nowy obiket i potraktuj go jak typ hhtp

  it('should add two numbers', () => {
      // given
      const service: QuoteService = new QuoteService(null);
      const num1 = 2;
      const num2 = 2;

      // when
      const result = service.add(num1, num2);

      // then
      expect(4).toEqual(result);
    });
});
