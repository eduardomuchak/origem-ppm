import { api, token } from "services/api";

export async function patchEditarDespesa(
  id: number,
  payload: any
): Promise<{ data: any; status: number }> {
  const { data, status } = await api.patch(
    `/???????????/${id}`,
    payload,
    token()
  );

  return { data, status };
}
