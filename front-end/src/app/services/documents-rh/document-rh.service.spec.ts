import { TestBed } from '@angular/core/testing';

import { DocumentRhService } from './document-rh.service';

describe('DocumentRhService', () => {
  let service: DocumentRhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentRhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
