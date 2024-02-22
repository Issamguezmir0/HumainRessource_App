import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFactDocumentsComponent } from './list-fact-documents.component';

describe('ListFactDocumentsComponent', () => {
  let component: ListFactDocumentsComponent;
  let fixture: ComponentFixture<ListFactDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFactDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFactDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
