import { TestBed } from '@angular/core/testing';

import { FactDocumentService } from './fact-document.service';

describe('FactDocumentService', () => {
  let service: FactDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
