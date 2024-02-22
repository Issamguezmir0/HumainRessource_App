import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskForDocumentComponent } from './ask-for-document.component';

describe('AskForDocumentComponent', () => {
  let component: AskForDocumentComponent;
  let fixture: ComponentFixture<AskForDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskForDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskForDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
