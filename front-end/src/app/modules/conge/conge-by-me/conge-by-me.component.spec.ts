import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeByMeComponent } from './conge-by-me.component';

describe('CongeByMeComponent', () => {
  let component: CongeByMeComponent;
  let fixture: ComponentFixture<CongeByMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongeByMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeByMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
