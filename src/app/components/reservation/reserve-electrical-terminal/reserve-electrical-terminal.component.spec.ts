import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveElectricalTerminalComponent } from './reserve-electrical-terminal.component';

describe('ReserveElectricalTerminalComponent', () => {
  let component: ReserveElectricalTerminalComponent;
  let fixture: ComponentFixture<ReserveElectricalTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveElectricalTerminalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveElectricalTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
