import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentResumeComponent } from './document-resume.component';

describe('DocumentResumeComponent', () => {
  let component: DocumentResumeComponent;
  let fixture: ComponentFixture<DocumentResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
