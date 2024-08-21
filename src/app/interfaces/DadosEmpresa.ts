export interface Socio {
  nome: string;
  qualificacao: string;
}

export interface DadosEmpresa {
  nome: string;
  razao_social: string;
  data_abertura: string;
  situacao: string;
  atividade_principal: string;
  endereco_completo: string;
  telefone: string;
  email: string;
  socios: Socio[];
}
