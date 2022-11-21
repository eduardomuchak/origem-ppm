import * as yup from "yup";

export const cadastroModalTarefaSchema = yup.object({
  nomeTarefa: yup.string().required("Nome tarefa é requerido."),
  atividadeRel: yup.string().required("Nome da atividade é requerido."),
  data: yup.date().required("Data é requerido."),
  responsavel: yup.string().required("Responsavel é requerido."),
  descricao: yup.string(),
  // Pass
});
