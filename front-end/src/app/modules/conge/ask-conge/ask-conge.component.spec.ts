import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskCongeComponent } from './ask-conge.component';

describe('AskCongeComponent', () => {
  let component: AskCongeComponent;
  let fixture: ComponentFixture<AskCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskCongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
