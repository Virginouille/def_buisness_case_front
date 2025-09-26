import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorneComponent } from './borne.component';

describe('BorneComponent', () => {
  let component: BorneComponent;
  let fixture: ComponentFixture<BorneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
