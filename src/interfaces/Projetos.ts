export interface Projetos {
  id: number;
  id_projeto_real: number;
  campo_id: string;
  nome_projeto: string;
  vlr_cpi: number;
  vlr_spi: number;
  vlr_cr: number;
  vlr_orcado: number;
  tcpi: number;
  vlr_tpci: number;
  prioridade: string;
  complexidade: string;
  polo: string;
  coordenador: string;
  responsavel: string;
  data_inicio: string;
  data_fim: string;
  pct: number;
  descricao: string;
  justificativa: string;
  vlr_cpi_corrigido: number;
  vlr_spi_corrigido: number;
  valor_total_previsto: number;
}
