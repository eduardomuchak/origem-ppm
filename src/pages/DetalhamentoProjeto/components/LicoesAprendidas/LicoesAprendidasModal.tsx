import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  // Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { LicoesAprendidas } from "interfaces/Services";

import { patchLicaoAprendida } from "services/update/LicoesAprendidas";

import CadastrarLicoesAprendidasModal from "./CadastrarLicoesAprendidasModal";
import EditarLicoesAprendidasModal from "./EditarLicoesAprendidasModal";
import TabelaLicoesAprendidas from "./TabelaLicoesAprendidas";

function LicoesAprendidasModal({
  licoes,
  setLicoes,
  categorias,
  callBack,
}: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editLicao, setEditLicao] = useState({} as LicoesAprendidas);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [categoriaId, setCategoriaId] = useState("");
  const [data, setData] = useState("");
  const [filteredTable, setFilteredTable] = useState(licoes);

  function handleEditLicao(licao: LicoesAprendidas): void {
    setEditLicao(licao);
    setOpenModalEdit(true);
  }

  async function handleUpdateLicoes(
    licao: any,
    campo: any,
    payload: any,
    user: any
  ) {
    try {
      await patchLicaoAprendida(licao, campo, payload, user);
      callBack();
      setOpenModalEdit(false);
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(data);
  // console.log(licoes);
  // console.log(
  //   licoes.filter(
  //     (lic: any) =>
  //       lic.id_categoria == categoriaId || lic.dat_usu_create.includes(data)
  //   )
  // );

  function handleFilter(categoriaId: string, data: string) {
    let filtered = licoes;
    if (categoriaId) {
      filtered = licoes.filter((lic: any) => lic.id_categoria == categoriaId);

      return setFilteredTable(filtered);
    }
    if (data) {
      filtered = licoes.filter((lic: any) => lic.dat_usu_create.includes(data));

      return setFilteredTable(filtered);
    }
    setFilteredTable(licoes);
  }

  return (
    <>
      <Button
        onClick={onOpen}
        background={"white"}
        color={"origem.300"}
        _hover={{
          background: "origem.500",
          color: "white",
          transition: "all 0.4s",
        }}
        px={6}
        py={9}
        borderTopRadius={"0px"}
        borderBottomRadius={"6px"}
      >
        Lições Aprendidas
      </Button>

      <Modal size={"4xl"} isOpen={isOpen} onClose={onClose}>
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
            Lições Aprendidas
          </ModalHeader>

          <Stack spacing={5} mt={"3.5"}>
            <FormControl>
              <Flex
                flexDirection={useBreakpointValue({
                  base: "column",
                  md: "row",
                })}
                alignItems={useBreakpointValue({
                  base: "center",
                  md: "flex-end",
                })}
                px={4}
                py={4}
                gap={2}
              >
                <Flex
                  display={"flex"}
                  justifyContent={"space-between"}
                  flex={3}
                >
                  <FormControl>
                    <FormLabel htmlFor="categoria">CATEGORIA</FormLabel>
                    <Select
                      id="categoria"
                      name="categoria"
                      onChange={(e) => setCategoriaId(e.target.value)}
                    >
                      <option value="">Selecione</option>
                      {categorias.map((cat: any, index: number) => (
                        <option value={cat.id} key={index}>
                          {cat.nom_categoria}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </Flex>
                <Flex
                  display={"flex"}
                  justifyContent={"space-between"}
                  flex={1}
                >
                  <FormControl>
                    <FormLabel htmlFor="dataFim">DATA</FormLabel>
                    <Input
                      isRequired
                      placeholder="dd/mm/aaaa"
                      id="dataFim"
                      type="date"
                      name="dataFim"
                      value={data}
                      onChange={(event) => setData(event.target.value)}
                      // value={projectsForm.projectsForm.values.dataFim}
                      // onChange={projectsForm.projectsForm.handleChange}
                    />
                  </FormControl>
                </Flex>

                <Flex
                  display={"flex"}
                  justifyContent={"space-between"}
                  flex={1.5}
                >
                  <Button
                    type="button"
                    background="white"
                    variant="outline"
                    color="origem.500"
                    borderColor="origem.500"
                    // border={"2px"}
                    // h={useBreakpointValue({ base: "100%", md: "120%" })}
                    // float={"right"}
                    onClick={() => {
                      handleFilter(categoriaId, data);
                      setCategoriaId("");
                    }}
                    _hover={{
                      background: "origem.300",
                      transition: "all 0.4s",
                      color: "white",
                    }}
                  >
                    Buscar
                    <Icon as={AiOutlineSearch} fontSize="20px" ml={1} />
                  </Button>

                  <Button
                    type="button"
                    background="origem.500"
                    variant="primary"
                    color="white"
                    // border={"2px"}
                    // h={useBreakpointValue({ base: "100%", md: "120%" })}
                    // float={"right"}
                    onClick={() => setOpenModalRegister(true)}
                    _hover={{
                      background: "origem.300",
                      transition: "all 0.4s",
                      color: "white",
                    }}
                  >
                    Adicionar
                  </Button>
                </Flex>
              </Flex>
            </FormControl>
          </Stack>

          <ModalCloseButton />
          <ModalBody>
            <TabelaLicoesAprendidas
              onEdit={handleEditLicao}
              licoes={filteredTable}
            />
            {openModalEdit && (
              <EditarLicoesAprendidasModal
                closeModal={() => setOpenModalEdit(false)}
                licao={editLicao}
                handleUpdateLicoes={handleUpdateLicoes}
              />
            )}

            {openModalRegister && (
              <CadastrarLicoesAprendidasModal
                closeModal={() => setOpenModalRegister(false)}
                onCloseModal={() => setOpenModalRegister(false)}
              />
            )}
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LicoesAprendidasModal;
