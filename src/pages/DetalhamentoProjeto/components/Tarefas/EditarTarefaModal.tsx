import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
// import { useParams } from "react-router-dom";

import {
  Flex,
  Box,
  IconButton,
  // useBreakpointValue,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
  Select,
  // useDisclosure,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { AtividadesProjeto, TarefaAtividade } from "interfaces/Services";
import { Text } from "recharts";

import { useAuth } from "hooks/useAuth";

import { patchTarefa } from "services/update/Tarefa";

interface EditModalProps {
  isModalOpen: any;
  closeModal: any;
  editTarefa: TarefaAtividade;
  atividadesProjeto: AtividadesProjeto[];
  newRender: any;
}

function EditarTarefaModal({
  isModalOpen,
  closeModal,
  editTarefa,
  atividadesProjeto,
  newRender,
}: EditModalProps) {
  // const { onClose } = useDisclosure();

  const novaData = format(new Date(editTarefa?.data_tarefa), "yyyy-MM-dd");

  const { user } = useAuth();
  const [tarefaId] = useState(editTarefa?.id);
  const [nome, setNome] = useState(editTarefa?.nome_tarefa);
  const [data, setData] = useState(novaData);
  const [atividadeId, setAtividadeId] = useState(
    editTarefa?.atividade_relacionada
  );
  const [descricao, setDescricao] = useState(editTarefa?.descricao_tarefa);

  const camposParaEditar = [
    "nome_tarefa",
    "data_tarefa",
    "atividade_relacionada",
    "descricao_tarefa",
  ];

  function updatePayload(campo: string) {
    if (campo === "nome_tarefa") return nome;
    if (campo === "data_tarefa") return data;
    if (campo === "atividade_relacionada") return atividadeId;
    if (campo === "descricao_tarefa") return descricao;
  }

  return (
    <Flex>
      <Box
        display={"flex"}
        alignItems={"center"}
        border="2px"
        padding={2}
        borderRadius={6}
        borderColor={"origem.300"}
        _hover={{
          background: "#f5f5f5",
          transition: "all 0.4s",
          color: "origem.300",
          cursor: "pointer",
          borderColor: "origem.500",
        }}
      >
        <IconButton
          aria-label="Plus sign"
          icon={<BsPlusLg />}
          background="origem.300"
          variant="secondary"
          color="white"
          mr={2}
          isRound={true}
          size="sm"
        />
        {/* <Text
          fontSize={useBreakpointValue({ base: "sm", md: "sm" })}
          fontWeight={"bold"}
          color={"origem.500"}
        >
          EDITAR FORNECEDOR
        </Text> */}
      </Box>
      <Modal isOpen={isModalOpen} onClose={closeModal} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            backgroundColor={"#2E69FD"}
            borderTopRadius={7}
            display={"flex"}
            justifyContent={"center"}
            color={"white"}
            fontSize={"14px"}
          >
            Editar Tarefa
          </ModalHeader>
          <ModalCloseButton color={"white"} />
          <ModalBody>
            <FormControl
              marginBottom={1}
              padding={1}
              display={"flex"}
              justifyContent={"space-between"}
              gap={3}
            >
              <Flex flexDir={"column"} flexGrow={4}>
                <FormLabel
                  htmlFor="nomeTarefa"
                  color="#949494"
                  fontSize="12px"
                  fontWeight="700"
                  mt={"6px"}
                >
                  TAREFA
                </FormLabel>
                <Input
                  fontSize={"14px"}
                  borderRadius={"8px"}
                  border={"1px solid #A7A7A7"}
                  mt={"-9px"}
                  width={"328px"}
                  height={"56px"}
                  color="#2D2926"
                  isRequired
                  placeholder="Nome tarefa"
                  type="text"
                  id="nomeTarefa"
                  name="nomeTarefa"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              </Flex>
              <Flex flexDir={"column"} flexGrow={1}>
                <FormLabel
                  htmlFor="data"
                  color="#949494"
                  fontSize="12px"
                  fontWeight="700"
                  mt={"6px"}
                >
                  DATA
                </FormLabel>
                <Input
                  borderRadius={"8px"}
                  border={"1px solid #A7A7A7"}
                  mt={"-9px"}
                  width={"120px"}
                  height={"56px"}
                  fontSize={"14px"}
                  color="#2D2926"
                  id="data"
                  type="date"
                  name="data"
                  value={data}
                  onChange={(event) => setData(event.target.value)}
                />
              </Flex>
            </FormControl>
            <FormControl padding={1} marginBottom={1} width={"204px"}>
              <FormLabel
                htmlFor="atividadeRel"
                color="#949494"
                fontSize="12px"
                fontWeight="700"
                mt={"6px"}
              >
                ATIVIDADE RELACIONADA
              </FormLabel>
              <Select
                fontSize={"14px"}
                borderRadius={"8px"}
                border={"1px solid #A7A7A7"}
                mt={"-9px"}
                width={"208px"}
                height={"56px"}
                color="#2D2926"
                id="atividadeRel"
                name="atividadeRel"
                value={atividadeId}
                onChange={(event) => setAtividadeId(Number(event.target.value))}
              >
                <option value="">Selecione</option>
                {atividadesProjeto.map((atividade, index) => (
                  <option value={atividade.id} key={index}>
                    {atividade.nomeAtividade}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl padding={1}>
              <FormLabel
                htmlFor="acao"
                color="#949494"
                fontSize="12px"
                fontWeight="700"
                mt={"6px"}
              >
                DESCRIÇÃO DA TAREFA
              </FormLabel>
              <Textarea
                fontSize={"14px"}
                borderRadius={"8px"}
                border={"1px solid #A7A7A7"}
                mt={"-9px"}
                width={"456px"}
                height={"121px"}
                color="#2D2926"
                isRequired
                placeholder="Descrição da tarefa"
                id="descrição"
                name="descrição"
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Flex gap={2}>
              <Button
                variant="primary"
                color="#F40606"
                _hover={{
                  background: "red.500",
                  transition: "all 0.4s",
                  color: "white",
                }}
                onClick={closeModal}
                width={"208px"}
                height={"56px"}
              >
                <Text fontWeight={"700"} fontSize="18px">
                  Cancelar
                </Text>
              </Button>
              <Button
                background="#0047BB"
                variant="primary"
                color="white"
                _hover={{
                  background: "#0047BB",
                  transition: "all 0.4s",
                }}
                onClick={() => {
                  camposParaEditar.forEach((tarefa) =>
                    patchTarefa(
                      Number(tarefaId),
                      tarefa,
                      updatePayload(tarefa)?.toString() || "",
                      user?.nome
                    )
                  );
                  newRender();
                  closeModal();
                }}
                width={"208px"}
                height={"56px"}
              >
                <Text fontWeight={"700"} fontSize="18px">
                  Adicionar
                </Text>
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default EditarTarefaModal;
