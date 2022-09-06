export interface CadastroSonda {
  nome: string;
}

export interface CadastroTarefa {
  tarefa: string;
}

export interface AtividadesProjetoTipo {
  base: string;
  tarefa: string;
  precedente: string;
  dias: number;
}

export interface CadastroProjetoTipo {
  nomeProjeto: string;
  atividades: AtividadesProjetoTipo[];
  comentarios: string;
}

export interface CadastroIntervencao {
  poco: string;
  campo: string;
  sonda: string;
  sequencia: string;
  inicioPrevisto: string;
  projeto: string;
  observacoes: string;
}

interface Precedente {
  ordem: number;
  atividaeId: number | null;
  tipo: string;
  dias: number;
  restricao: string;
}

export interface CadastroAtividade {
  nome: string;
  prioridade: boolean;
  obs: string;
  responsavelId: number;
  tarefaId: number;
  areaAtuacaoId: number;
  atividadesPrecedentes?: Precedente[];
}
