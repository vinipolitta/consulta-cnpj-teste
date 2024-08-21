import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private toastr: ToastrService) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocorreu um erro desconhecido!';

    if (error.error instanceof ErrorEvent) {
      // Erro no lado do cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Erro no lado do servidor
      switch (error.status) {
        case 400:
          errorMessage = 'Requisição inválida. Por favor, verifique os dados enviados.';
          break;
        case 404:
          errorMessage = 'Recurso não encontrado. Verifique o CNPJ e tente novamente.';
          break;
        case 500:
          errorMessage = 'Erro interno do servidor. Tente novamente mais tarde.';
          break;
        default:
          errorMessage = `Código do erro: ${error.status}\nMensagem: ${error.message}`;
      }
    }

    this.toastr.error(errorMessage, 'Erro', {
      toastClass: 'ngx-toastr toast-error'
    });
    return throwError(errorMessage);
  }
}
