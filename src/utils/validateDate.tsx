export const statusProjeto = [
  {
    id: 4,
    status: "Não Iniciado",
    color: "#585858",
  },
  {
    id: 2,
    status: "Em Andamento",
    color: "#0047BB",
  },
  {
    id: 5,
    status: "Não Aplicável",
    color: "#C2561A",
  },
  {
    id: 3,
    status: "Atrasado",
    color: "#BD0000",
  },
  {
    id: 1,
    status: "Concluído",
    color: "#027200",
  },
];

export function validateDate(
  pct_plan: number, // porcentagem planejada
  comp_pct: number, // comparação porcentagens
  pct_real: number // porcentagem realizada
) {
  switch (true) {
    case pct_plan > pct_real:
      return statusProjeto[3].color; // atrasado
    case pct_real === 100 && comp_pct === 1:
      return statusProjeto[4].color; // concluído
    case (pct_real > 0 && pct_real < 100 && comp_pct === 1) ||
      (pct_real > pct_plan && comp_pct === 1):
      return statusProjeto[1].color; // em andamento
    case pct_plan === 0 && pct_real === 0:
      return statusProjeto[0].color; // não iniciado
    default:
      return statusProjeto[2].color; // não aplicável
  }
}
