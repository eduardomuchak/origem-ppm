import { api, token } from "services/api";

export async function patchTarefa(
  id: number,
  campo: any,
  payload: string | number,
  user: any
): Promise<{ data: any; status: number }> {
  const { data, status } = await api.patch(
    `/tarefas/${id}/${campo}/${payload}/${user}`,
    token()
  );

  return { data, status };
}
