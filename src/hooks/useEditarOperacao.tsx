import { useEffect, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";
import { useFormik } from "formik";
import {
  AreaAtuacao,
  Responsavel,
} from "interfaces/CadastrosModaisInfograficos";
import * as yup from "yup";

import { useToast } from "contexts/Toast";

import {
  getAreaAtuacaoList,
  getResponsavelList,
} from "services/get/Infograficos";
import { patchOperacoesEstatisticas } from "services/update/OperacoesEstatisticas";

import { useAuth } from "./useAuth";

export function useEditarOperacao(
  refresh: boolean,
  setRefresh: Function,
  projeto: any
) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [listaAreaAtuacao, setListaAreaAtuacao] = useState<AreaAtuacao[]>([]);
  const [listaResponsaveis, setListaResponsaveis] = useState<Responsavel[]>([]);

  const reqGet = async () => {
    const areaAtuacao = await getAreaAtuacaoList();
    const responsaveis = await getResponsavelList();

    const areasAtuacaoSorted = areaAtuacao.data.sort((a: any, b: any) =>
      a.tipo.localeCompare(b.tipo)
    );
    const responsaveisSorted = responsaveis.data.sort((a: any, b: any) =>
      a.nome.localeCompare(b.nome)
    );

    setListaAreaAtuacao(areasAtuacaoSorted);
    setListaResponsaveis(responsaveisSorted);
  };

  const initialValues = {
    nom_usu_create: user?.nome,
    id_sonda: "",
    id_poco: "",
    id_atividade: 0,
    id_area: 0,
    inicio_realizado: "",
    fim_realizado: "",
    inicio_planejado: "",
    fim_planejado: "",
    // hrs_reais: 0, // tratamento combinado
    // hrs_totais: 0, // tratamento combinado
    pct_real: 0,
    id_responsavel: 0,
    // precedentes: [
    //   {
    //     atividadePrecedenteId: 0,
    //     dias: 0,
    //   },
    // ],
  };

  const adicionarOperacao = yup.object({
    id_atividade: yup.number().required("Campo obrigatório").moreThan(0),
    id_area: yup.number(), // .required("Campo obrigatório").moreThan(0),
    inicio_realizado: yup.string(), // .required("Campo obrigatório"),
    fim_realizado: yup.string(), // .required("Campo obrigatório"),
    inicio_planejado: yup.string().required("Campo obrigatório"),
    fim_planejado: yup.string(), // .required("Campo obrigatório"),
    // hrs_totais: yup.number().required("Campo obrigatório").moreThan(0),
    pct_real: yup.number(), // .required("Campo obrigatório").moreThan(0),
    id_responsavel: yup.number(), // .required("Campo obrigatório").moreThan(0),
    // precedentes: yup.array().of(
    //   yup.object({
    //     atividadePrecedenteId: yup.number(),
    //     dias: yup.number(),
    //   })
    // ),
  });
  const registerForm: any = useFormik({
    initialValues,
    validationSchema: adicionarOperacao,
    onSubmit: async (values) => {
      const newValues = {
        // nom_usu_create: user?.nome,
        // id_sonda: projeto.id_sonda,
        // id_poco: projeto.id_poco,

        id_atividade: values.id_atividade,
        // id_area: values.id_area,
        // id_responsavel: values.id_responsavel,
        inicio_realizado: new Date(values.inicio_realizado),
        fim_realizado: values.fim_realizado, // tratamento back
        inicio_planejado: new Date(values.inicio_planejado),
        fim_planejado: values.fim_planejado, // tratamento back
        // duracao_realizado: values.hrs_reais,
        // duracao_planejado: values.hrs_totais,
        pct_real: values.pct_real, // tratamento back
        // precedentes: values.precedentes,
      };

      setLoading(true);

      try {
        // TODO: liberar endpoint
        // const res = {
        //   status: 200,
        //   data: newValues,
        // };
        // const status = res.status;
        const { status } = await patchOperacoesEstatisticas(newValues);
        if (status === 200 || status === 201) {
          toast.success("Operação adicionada com sucesso!", {
            id: "toast-principal",
          });
          setLoading(false);
          setRefresh(!refresh);
        }
      } catch (error) {
        toast.error("Erro ao adicionar operação!", {
          id: "toast-principal",
        });
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    reqGet();
  }, [refresh, projeto]);

  return {
    registerForm,
    loading,
    listaAreaAtuacao,
    listaResponsaveis,
    onOpen,
    isOpen,
    onClose,
  };
}
