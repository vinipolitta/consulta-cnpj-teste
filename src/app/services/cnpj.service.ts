import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ErrorHandlerService } from './ErrorHandlerService.service';

@Injectable({
  providedIn: 'root',
})
export class CnpjService {

  private apiUrl = 'https://brasilapi.com.br/api/cnpj/v1/';

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  getCnpjData(cnpj: string) {
    return this.http.get(`${this.apiUrl}${cnpj}`)
      .pipe(
        catchError(this.errorHandler.handleError.bind(this.errorHandler))
      );
  }
}
