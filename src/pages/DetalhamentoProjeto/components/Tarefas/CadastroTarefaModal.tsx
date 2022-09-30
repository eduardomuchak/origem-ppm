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
import { AtividadesProjeto } from "interfaces/Services";

import { useAuth } from "hooks/useAuth";

import { postTarefa } from "services/post/AdicionarTarefa";

interface CadastroTarefaProps {
  isModalOpen: any;
  closeModal: any;
  atividadesProjeto: AtividadesProjeto[];
  newRender: any;
}

function CadastroTarefasModal({
  isModalOpen,
  closeModal,
  atividadesProjeto,
  newRender,
}: CadastroTarefaProps) {
  // const { onClose } = useDisclosure();
  const { user } = useAuth();
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [atividadeId, setAtividadeId] = useState(0);
  const [descricao, setDescricao] = useState("");

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
      <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            backgroundColor={"#2E69FD"}
            borderTopRadius={7}
            display={"flex"}
            justifyContent={"center"}
            color={"white"}
            fontSize={"1em"}
          >
            Cadastrar Tarefa
          </ModalHeader>
          <ModalCloseButton color={"white"} />
          <ModalBody>
            <FormControl
              marginBottom={4}
              padding={1}
              display={"flex"}
              justifyContent={"space-between"}
              gap={3}
            >
              <Flex flexDir={"column"} flexGrow={4}>
                <FormLabel
                  htmlFor="nomeTarefa"
                  color="#D6D4D4"
                  fontSize="sm"
                  fontWeight="500"
                >
                  NOME DA TAREFA
                </FormLabel>
                <Input
                  isRequired
                  placeholder="Nome tarefa"
                  color="#D6D4D4"
                  type="text"
                  id="nomeTarefa"
                  name="nomeTarefa"
                  width="100%"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              </Flex>
              <Flex flexDir={"column"} flexGrow={1}>
                <FormLabel
                  color="#D6D4D4"
                  htmlFor="data"
                  fontSize="sm"
                  fontWeight="500"
                >
                  DATA
                </FormLabel>
                <Input
                  // placeholder="dd/mm/aaaa"
                  color="#D6D4D4"
                  id="data"
                  type="date"
                  name="data"
                  value={data}
                  onChange={(event) => setData(event.target.value)}
                />
              </Flex>
            </FormControl>
            <FormControl padding={1} marginBottom={4} width={"204px"}>
              <FormLabel
                htmlFor="atividadeRel"
                color="#D6D4D4"
                fontSize="sm"
                fontWeight="500"
              >
                ATIVIDADE RELACIONADA
              </FormLabel>
              <Select
                id="atividadeRel"
                name="atividadeRel"
                color="#D6D4D4"
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
                color="#D6D4D4"
                fontSize="sm"
                fontWeight="500"
              >
                DESCRIÇÃO DA TAREFA
              </FormLabel>
              <Textarea
                color="#D6D4D4"
                isRequired
                placeholder="Descrição da tarefa"
                id="descrição"
                name="descrição"
                width="100%"
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Flex gap={2}>
              <Button
                variant="primary"
                color="red"
                _hover={{
                  background: "red.500",
                  transition: "all 0.4s",
                  color: "white",
                }}
                onClick={closeModal}
              >
                Cancelar
              </Button>
              <Button
                background="origem.300"
                variant="primary"
                color="white"
                _hover={{
                  background: "origem.500",
                  transition: "all 0.4s",
                }}
                onClick={async () => {
                  await postTarefa({
                    nome_tarefa: nome,
                    data_tarefa: new Date(data),
                    atividade_relacionada: atividadeId,
                    descricao_tarefa: descricao,
                    nom_usu_create: user?.nome,
                  });
                  newRender();
                  closeModal();
                }}
              >
                Adicionar
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default CadastroTarefasModal;
