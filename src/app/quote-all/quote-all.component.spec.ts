import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteAllComponent } from './quote-all.component';

describe('QuoteAllComponent', () => {
  let component: QuoteAllComponent;
  let fixture: ComponentFixture<QuoteAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
