import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCardRequestComponent } from './reservation-card-request.component';

describe('ReservationCardComponent', () => {
  let component: ReservationCardRequestComponent;
  let fixture: ComponentFixture<ReservationCardRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationCardRequestComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReservationCardRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
