import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { INPUT_MOCK_REQUESTS } from '../mock_dati/mock_input';
import { MockRequest } from '../models/mock-request';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getRequests(): Observable<MockRequest[]> {
    return of(INPUT_MOCK_REQUESTS).pipe(delay(250));
  }
}
