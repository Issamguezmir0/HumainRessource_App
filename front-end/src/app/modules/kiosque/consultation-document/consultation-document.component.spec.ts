import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationDocumentComponent } from './consultation-document.component';

describe('ConsultationDocumentComponent', () => {
  let component: ConsultationDocumentComponent;
  let fixture: ComponentFixture<ConsultationDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
