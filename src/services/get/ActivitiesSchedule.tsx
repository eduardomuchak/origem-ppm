import { api, token } from "services/api";

export const Atividade = [
  {
    atividade: "Atividade x, tamanho maior, teste",
    data: "2022-04-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
  {
    atividade: "Atividade x",
    data: "2022-04-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
  {
    atividade: "Atividade x, tamanho maior, teste",
    data: "2022-04-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
  {
    atividade: "Atividade x",
    data: "2022-04-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
  {
    atividade: "Atividade x",
    data: "2022-04-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
  {
    atividade: "Atividade x",
    data: "2022-04-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
  {
    atividade: "Atividade x",
    data: "2022-04-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
  {
    atividade: "Atividade x",
    data: "2022-04-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
  {
    atividade: "Atividade x",
    data: "2022-04-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
  {
    atividade: "Atividade x",
    data: "2022-04-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
  {
    atividade: "Atividade x",
    data: "2024-04-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
  {
    atividade: "Atividade x",
    data: "2022-04-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
  {
    atividade: "Atividade x",
    data: "2022-04-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
  {
    atividade: "Atividade x adsadsadsada",
    data: "2022-04-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
  {
    atividade: "Atividade x",
    data: "2022-09-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
  {
    atividade: "Atividade x",
    data: "2023-04-05T00:00:00.000Z",
    porcentagemFeita: "50%",
  },
];

export async function getAtividadesCampanha(id: string | undefined): Promise<{
  data: any;
  status: number;
}> {
  const { data, status } = await api.get(`/campanha/atividades/${id}`, token());

  return { data, status };
}

export async function getAtividadesPrecedentes(id: number | string): Promise<{
  data: any;
  status: number;
}> {
  const { data, status } = await api.get(`/campanha/?????????/${id}`, token());

  return { data, status };
}
