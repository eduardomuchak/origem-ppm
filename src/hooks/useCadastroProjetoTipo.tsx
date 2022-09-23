import { useEffect, useState } from "react";

import { useFormik } from "formik";
// import { cadastroProjetoTipoSchema } from 'validations/ModaisCadastrosInfografico';
import { AtividadeLista } from "interfaces/Services";

import { useToast } from "contexts/Toast";

import { getAtividadesList } from "services/get/Infograficos";
import { postProjetoTipo } from "services/post/CadastroModaisInfograficos";

import { useAuth } from "./useAuth";

export function useCadastroProjetoTipo() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [listaAtividades, setListaAtividades] = useState<AtividadeLista[]>([]);

  const carregarListaAtividade = async () => {
    const { data } = await getAtividadesList();
    const dataSorted = data.sort((a, b) => a.tarefa.localeCompare(b.tarefa));
    // console.log('dataSorted', dataSorted);
    setListaAtividades(dataSorted);
  };

  const listaAtividadesPrecedentes = listaAtividades.map((atividade) => ({
    id: atividade.id,
    nome: atividade.tarefa,
    checked: false,
  }));

  const initialValues = {
    nom_usu_create: user?.nome,
    nom_projeto_tipo: "",
    atividades: [
      {
        atividade_id_origem: 0,
        area_id: 0,
        tarefa_id: 0,
        qtde_dias: 0,
        precedentes: [
          {
            id: 0,
            nome: "",
            checked: false,
          },
        ],
      },
    ],
    comentarios: "",
  };

  const registerForm = useFormik({
    initialValues,
    // validationSchema: cadastroProjetoTipoSchema,
    onSubmit: async (values) => {
      const newValues = {
        nom_usu_create: user?.nome,
        nom_projeto_tipo: values.nom_projeto_tipo,
        atividades: values.atividades.map((atividade) => ({
          atividade_id_origem: atividade.atividade_id_origem,
          area_id: atividade.area_id,
          tarefa_id: atividade.tarefa_id,
          qtde_dias: atividade.qtde_dias,
          precedentes: atividade.precedentes.filter(
            (precedente) => precedente.checked
          ),
          // .map((precedente) => precedente.id),
        })),
        comentarios: values.comentarios,
      };

      setLoading(true);

      try {
        const { status } = await postProjetoTipo(newValues);

        if (status === 200 || status === 201) {
          toast.success("Projeto Tipo cadastrado com sucesso!", {
            id: "toast-principal",
          });
          setLoading(false);
        }
      } catch (error) {
        toast.error("Erro ao cadastrar Projeto Tipo!", {
          id: "toast-principal",
        });
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    carregarListaAtividade();
  }, []);

  return {
    registerForm,
    loading,
    listaAtividades,
    listaAtividadesPrecedentes,
  };
}
