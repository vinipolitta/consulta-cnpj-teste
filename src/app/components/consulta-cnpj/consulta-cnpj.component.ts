import { Component, OnInit } from '@angular/core';
import { CnpjService } from '../../services/cnpj.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DadosEmpresa } from '../../interfaces/DadosEmpresa';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consulta-cnpj',
  templateUrl: './consulta-cnpj.component.html',
  styleUrls: ['./consulta-cnpj.component.scss'],
})
export class ConsultaCnpjComponent implements OnInit {
  cnpjForm: FormGroup;
  dadosEmpresa: DadosEmpresa | null = null;

  constructor(private fb: FormBuilder, private cnpjService: CnpjService, private toastr: ToastrService) {
    this.cnpjForm = this.fb.group({
      cnpj: [''],
      nome: [''],
      razao_social: [''],
      data_abertura: [''],
      situacao: [''],
      atividade_principal: [''],
      endereco_completo: [''],
      telefone: [''],
      email: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const cnpj = this.cnpjForm.get('cnpj')?.value.replace(/\D/g, '');
    this.cnpjService.getCnpjData(cnpj).subscribe(
      (data: any) => {
        this.dadosEmpresa = {
          nome: data.nome_fantasia,
          razao_social: data.razao_social,
          data_abertura: data.data_inicio_atividade,
          situacao: data.situacao,
          atividade_principal: data.cnae_fiscal_descricao,
          endereco_completo: `${data.logradouro}, ${data.numero}, ${data.bairro}, ${data.municipio} - ${data.uf}, CEP: ${data.cep}`,
          telefone: data.ddd_telefone_1,
          email: data.email,
          socios: data.qsa.map((socio: any) => ({
            nome: socio.nome_socio,
            qualificacao: socio.qualificacao_socio,
          })),
        };

        this.cnpjForm.patchValue({
          nome: this.dadosEmpresa.nome,
          razao_social: this.dadosEmpresa.razao_social,
          data_abertura: this.dadosEmpresa.data_abertura,
          situacao: this.dadosEmpresa.situacao,
          atividade_principal: this.dadosEmpresa.atividade_principal,
          endereco_completo: this.dadosEmpresa.endereco_completo,
          telefone: this.dadosEmpresa.telefone,
          email: this.dadosEmpresa.email,
        });

        console.log(this.dadosEmpresa);

      },
      (error: any) => {
        console.error('Erro na consulta do CNPJ', error);
      }
    );
  }

  onSubmitForm() {
    console.log('Dados da empresa salvos:', this.cnpjForm.value);
    this.toastr.success("Enviado com sucesso", 'Sucesso', {
      toastClass: 'ngx-toastr toast-error'
    });
  }
}
