import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBorneComponent } from './card-borne.component';

describe('CardBorneComponent', () => {
  let component: CardBorneComponent;
  let fixture: ComponentFixture<CardBorneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBorneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBorneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
