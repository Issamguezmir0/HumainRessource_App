import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFactDocumentComponent } from './create-fact-document.component';

describe('CreateFactDocumentComponent', () => {
  let component: CreateFactDocumentComponent;
  let fixture: ComponentFixture<CreateFactDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFactDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFactDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
