import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerFormComponent } from './registrer-form.component';

describe('RegistrerFormComponent', () => {
  let component: RegistrerFormComponent;
  let fixture: ComponentFixture<RegistrerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
