import {
  Budget,
  ClasseServico,
  CustoDiario,
  Realizado,
  Result,
} from "interfaces/Budgets";

import { api, token } from "services/api";

export async function getBudgets(): Promise<Budget[]> {
  const uri = "/budgets";

  const { data } = await api.get<Budget[]>(uri, token());

  /* const data = [
    {
      id: 1,
      item: "1",
      projeto: {
        nome: "Olaf",
        id: 31,
      },
      planejado: 200,
      realizado: 500,
      gap: 25,
      descricao: "dafdfadfafddf",
      filhos: [
        {
          id: 4,
          item: "1.1",
          projeto: {
            nome: "Olaf",
            id: 31,
          },
          planejado: 100,
          realizado: 300,
          gap: 50,
          descricao: "da 34532fffdfadfafddf",
        },
        {
          id: 5,
          item: "1.2",
          projeto: {
            nome: "Olaf",
            id: 31,
          },
          planejado: 100,
          realizado: 200,
          gap: 50,
          descricao: "da 34532fffdfadfafddf",
        },
      ],
    },
    {
      id: 2,
      item: "2",
      projeto: {
        nome: "Head hat Lá",
        id: 2,
      },
      planejado: 200,
      realizado: 500,
      gap: 50,
      descricao: "da 34532fffdfadfafddf",
    },
    {
      id: 3,
      item: "3",
      projeto: {
        nome: "Cogumelo",
        id: 3,
      },
      planejado: 200,
      realizado: 500,
      gap: 25,
      descricao: "adfa  7s8f4sagfdaadfafddf",
    },
  ]; */
  return data;
}

export async function getBudgetDetail(id: string | null): Promise<Result> {
  const uri = `/budgets/detail/${id}`;

  /* const data = [
    {
      id: 1,
      brt: "1",
      servico: "Serviço 1",
      fornecedor: "-",
      total: 2000,
      previsto: 4000,
      realizado: 3500,
      gap: 50,
      filhos: [
        {
          id: 5,
          brt: "1.1",
          servico: "Serviço Mobilizacao",
          fornecedor: "-",
          total: 1000,
          previsto: 1000,
          realizado: 1000,
          gap: 50,
        },
        {
          id: 6,
          brt: "1.2",
          servico: "DTM POÇOS",
          fornecedor: "-",
          total: 1000,
          previsto: 3000,
          realizado: 2500,
          gap: 50,
        },
      ],
    },
    {
      id: 2,
      brt: "2",
      servico: "Serviço 2",
      fornecedor: "-",
      total: 5000,
      previsto: 6000,
      realizado: 4000,
      gap: 50,
      filhos: [
        {
          id: 3,
          brt: "2.1",
          servico: "Taxa Opranmdo",
          fornecedor: "-",
          total: 2000,
          previsto: 3000,
          realizado: 2000,
          gap: 50,
        },
        {
          id: 4,
          brt: "2.2",
          servico: "DTM POÇOS",
          fornecedor: "-",
          total: 3000,
          previsto: 3000,
          realizado: 2000,
          gap: 50,
        },
      ],
    },
  ]; */
  const { data } = await api.get<Result>(uri, token());

  return data;
}

export async function getBudgetProjects(): Promise<
  { nome: string; id: number }[]
> {
  const uri = "/budgets/projects";
  const { data } = await api.get<{ nome: string; id: number }[]>(uri, token());

  return data;
}

export async function getClassesServicos() {
  const uri = "/classe-servico";
  const { data } = await api.get<ClasseServico[]>(uri, token());

  return { data };
}

export async function getCustoDiarioFilho(
  id: number | undefined,
  startDate: string | Date | null,
  endDate: string | Date | null
): Promise<CustoDiario[]> {
  const uri = `/budgets/custoDiario/filho/${id}`;

  /* const data = [
    {
      id: 1,
      index: "1",
      date: "2022-10-08T00:00:00Z",
      fornecedor: "-",
      realizado: 2000,
      filhos: [
        {
          id: 2,
          index: "1.1",
          atividade: "Dreno",
          fornecedor: "-",
          realizado: 500,
        },
        {
          id: 3,
          index: "1.2",
          atividade: "Carrego",
          fornecedor: "-",
          realizado: 1500,
        },
        {
          id: 1,
          index: "1.3",
          atividade: "Carrego",
          fornecedor: "-",
          realizado: 3000,
        },
      ],
    },
  ]; */

  const { data } = await api.post(uri, { startDate, endDate }, token());

  // console.log(startDate, endDate);
  return data;
}

export async function getCustoDiarioPai(
  id: number | undefined,
  startDate: string | Date | null,
  endDate: string | Date | null
): Promise<CustoDiario[]> {
  const uri = `/budgets/custoDiario/pai/${id}`;

  const { data } = await api.post(uri, { startDate, endDate }, token());

  return data;
}

export async function getCustoRealizado(id: number): Promise<Realizado> {
  const uri = `/budgets/custoDiario/${id}`;

  const { data } = await api.get(uri, token());

  return data;
}
