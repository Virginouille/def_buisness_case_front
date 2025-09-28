import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalReserveModalComponent } from './terminal-reserve-modal.component';

describe('TerminalReserveModalComponent', () => {
  let component: TerminalReserveModalComponent;
  let fixture: ComponentFixture<TerminalReserveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminalReserveModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalReserveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
