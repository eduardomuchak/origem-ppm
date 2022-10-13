import {
  FinanceiroPorProjetos,
  PaginaCentroDeCusto,
} from "interfaces/FinanceiroProjetos";

import { api, token } from "services/api";

export async function getFinanceiroPorProjetos(): Promise<{
  data: FinanceiroPorProjetos[];
  status: number;
}> {
  const { data, status } = await api.get("/?????????", token());

  return { data, status };
}

export async function getCentroDeCustoProjetos(id: number): Promise<{
  data: PaginaCentroDeCusto[];
  status: number;
}> {
  const { data, status } = await api.get(`/?????????/${id}`, token());

  return { data, status };
}
