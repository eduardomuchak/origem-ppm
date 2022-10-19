import { useEffect, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Flex,
  IconButton,
  Text,
  Heading,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { StatisticsGanttProps, StatisticsTableData } from "interfaces/Services";

import Sidebar from "components/SideBar";

// import { useToast } from "contexts/Toast";

import { useEditarOperacao } from "hooks/useEditarOperacao";

import { getOperacoesEstatisticas } from "services/get/OperacoesEstatisticas";

// import { patchOperacoesEstatisticas } from "services/update/OperacoesEstatisticas";

import ModalCadastroOperacao from "../Statistics/components/ModalCadastroOperacao";
import { Gantt } from "./components/Gantt";
import ModalAdicionarOperacao from "./components/ModalAdicionarOperacao";
import ModalEditarOperacao from "./components/ModalEditarOperacao";

function StatisticsGantt() {
  const { sonda, poco } = useParams();
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  const [editOp, setEditOp] = useState({});
  const [projeto, setProjeto] = useState({
    sonda: "",
    id_sonda: null,
    poco: "",
    id_poco: null,
  });
  const [ganttData, setGanttData] = useState<StatisticsGanttProps[]>();
  const {
    registerForm,
    loading,
    listaResponsaveis,
    listaAreaAtuacao,
    onClose,
    onOpen,
    isOpen,
  } = useEditarOperacao(refresh, setRefresh, projeto);
  // const { toast } = useToast();
  const toolbarOptions = ["ZoomIn", "ZoomOut"];

  const formatToGanttData = (data: any) => {
    if (!data) return;
    const newGantt = data.atividades?.map((t: any) => ({
      sonda: data.sonda,
      id_sonda: data.id_sonda,
      poco: data.poco,
      id_poco: data.id_poco,
      TaskID: t.id_atividade,
      TaskName: t.nome_atividade,
      StartDate: new Date(t.inicio_real),
      EndDate: new Date(t.fim_real),
      BaselineStartDate: new Date(t.inicio_planejado), // new Date('04/21/2019')
      BaselineEndDate: new Date(t.fim_planejado),
      BaselineDuration: Number(t.hrs_totais),
      Duration: Number(t.hrs_reais),
      // Work: Number(t.hrs_reais),
      Progress: Number(t.pct_real),
      max: Number(t.vlr_max),
      min: Number(t.vlr_min),
      med: Number(t.vlr_media),
      dp: Number(t.vlr_dp),
    }));
    setGanttData(newGantt);
    setProjeto({
      sonda: data.sonda,
      id_sonda: data.id_sonda,
      poco: data.poco,
      id_poco: data.id_poco,
    });
  };

  // const handleEdit = async (task: any) => {
  //   console.log(">>>edit", task);
  //   try {
  //     const payload = {
  //       // nom_usu_create: user?.nome, // TODO nome do editor?
  //       // id_sonda: task.id_sonda,
  //       // id_poco: task.id_poco,
  //       id_atividade: task.TaskID, // id_atividade no update significa o id da linha
  //       inicio_realizado: task.StartDate,
  //       fim_realizado: task.EndDate,
  //       inicio_planejado: task.BaselineStartDate,
  //       fim_planejado: task.BaselineEndDate,
  //       // hrs_reais: task.Duration,
  //       // hrs_totais: task.BaselineDuration,
  //       pct_real: task.Progress,
  //       // nome_responsavel: "noe",
  //     };
  //     // const { status } = await patchOperacoesEstatisticas(payload);
  //     const status = 200;
  //     console.log(">>>>pauyload", payload);
  //     if (status === 200 || status === 201) {
  //       toast.success("Operação atualizada com sucesso!");
  //     }
  //   } catch (error) {
  //     toast.error("Erro ao editar operação!");
  //   }
  // };
  const convertReq = (payload: any): StatisticsTableData[] => {
    const newData: StatisticsTableData[] = [];
    payload.forEach((s: { id_sonda: number; sonda: string; pocos: any[] }) =>
      s.pocos.forEach((p) => {
        newData.push({
          sonda: s.sonda,
          id_sonda: s.id_sonda,
          poco: p.poco,
          id_poco: p.id_poco,
          atividades: p.atividades,
        });
      })
    );
    return newData;
  };

  const handleGetAllData = async () => {
    const { data } = await getOperacoesEstatisticas();
    // const data = atividades;
    if (!data) return;
    const newData = convertReq(data);

    const _ganttData = newData.find(
      (e) => e.id_sonda === Number(sonda) && e.id_poco === Number(poco)
    );
    // console.log(":>>>> _ganttData,", _ganttData);
    formatToGanttData(_ganttData);
  };

  useEffect(() => {
    handleGetAllData();
  }, [refresh]);

  // useEffect(() => {
  //   formatToGanttData(state.data);

  //   // handleSetData();
  //   // setLoading(false);
  // }, [refresh]);

  return (
    <>
      <Sidebar>
        <Stack spacing="8">
          <Box
            py={{ base: "0", sm: "10" }}
            px={{ base: "4", sm: "10" }}
            w={"100%"}
            bg={useBreakpointValue({ base: "transparent", sm: "white" })}
            boxShadow={{
              base: "none",
              sm: useColorModeValue("md", "md-dark"),
            }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack>
              <Flex mb={5} justify={"space-between"} wrap={"wrap"}>
                <IconButton
                  aria-label="voltar"
                  color={"black"}
                  backgroundColor="transparent"
                  size="lg"
                  icon={<FiChevronLeft />}
                  onClick={() => navigate(`/estatisticas`)}
                />
                <Box>
                  <Heading as="h3" size="md">
                    {projeto.sonda}
                  </Heading>
                  <Text>{projeto.poco}</Text>
                </Box>

                <Flex gap={2} flex={2} justify={"end"} align={"end"}>
                  {/* <ModalEditarCronograma
                    refresh={refresh}
                    setRefresh={setRefresh}
                    atual={state.data}
                  /> */}
                  <ModalCadastroOperacao
                    refresh={refresh}
                    setRefresh={setRefresh}
                  />
                  <ModalAdicionarOperacao
                    setRefresh={setRefresh}
                    refresh={refresh}
                    // atividades={atividades}
                    projeto={projeto}
                  />
                  <ModalEditarOperacao
                    setRefresh={setRefresh}
                    refresh={refresh}
                    // atividades={atividades}
                    editOp={editOp}
                    setEditOp={setEditOp}
                    listaResponsaveis={listaResponsaveis}
                    listaAreaAtuacao={listaAreaAtuacao}
                    isOpen={isOpen}
                    onClose={onClose}
                    registerForm={registerForm}
                    loading={loading}
                  />
                </Flex>
              </Flex>
            </Stack>
            <Stack spacing="8">
              <Gantt
                refresh={refresh}
                setRefresh={setRefresh}
                options={{
                  showGantt: true,
                  toolbarOptions,
                }}
                edit={{
                  onOpen,
                  setEditOp,
                }}
                data={ganttData}
              />
            </Stack>
          </Box>
        </Stack>
      </Sidebar>
    </>
  );
}

export { StatisticsGantt };
