import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBorneComponent } from './modify-borne.component';

describe('ModifyBorneComponent', () => {
  let component: ModifyBorneComponent;
  let fixture: ComponentFixture<ModifyBorneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyBorneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyBorneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
