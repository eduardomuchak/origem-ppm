import { FaGreaterThan } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";

import {
  Button,
  Flex,
  FormControl,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  IconButton,
  Icon,
} from "@chakra-ui/react";
// import { Ring } from "@uiball/loaders";

// import { TextError } from "components/TextError";

import { handleCancelar } from "utils/handleCadastro";

import { useCadastroPriorizacao } from "hooks/useCadastroPriorizacao";

import EditarPriorizacao from "../Priorizacao/EditarPriorizacao";
import ModalCadastrarOpcaoPriorizacao from "./CadastrarOpcaoPriorizacao";
import { TabelaBeneficio } from "./TabelaBeneficio";

interface TableProps {
  nomeRanking: string;
  idRanking: any;
}

function ModalBeneficio(infosRankings: TableProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { registerForm } = useCadastroPriorizacao();
  // console.log(nomeRanking.nomeRanking);
  // console.log(nomeRanking.idRanking);

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        color={"origem.500"}
        backgroundColor={"white"}
        border={"none"}
        textAlign={"center"}
        icon={<MdModeEdit />}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
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
            {`Priorização ${infosRankings.nomeRanking}`}
          </ModalHeader>
          {/* <ModalCloseButton color={"white"} /> */}
          <form
            onSubmit={(e) => {
              // e.preventDefault();
              registerForm.handleSubmit(e);
            }}
          >
            <ModalBody mt={3}>
              <FormControl>
                <Flex gap={4}>
                  <Stack gap={2}>
                    <Flex direction={"column"}>
                      <Flex>
                        <Flex align={"flex-start"}>
                          <Text>
                            <Button
                              aria-label=""
                              backgroundColor={"white"}
                              color={"black"}
                              onClick={() =>
                                handleCancelar(registerForm, onClose)
                              }
                              _hover={{
                                background: "white",
                                transition: "all 0.4s",
                                color: "origem.500",
                              }}
                              fontSize={"20px"}
                              mb={5}
                            >
                              <IoIosArrowBack /> Priorização
                            </Button>
                          </Text>
                        </Flex>
                        <Flex ml={"180px"}>
                          <Flex mt={"18px"}>
                            <ModalCadastrarOpcaoPriorizacao
                              nomeRanking={infosRankings.nomeRanking}
                              idRanking={infosRankings.idRanking}
                            />
                          </Flex>
                          <Flex mt={"18px"}>
                            <EditarPriorizacao
                              nomeRanking={infosRankings.nomeRanking}
                            />
                          </Flex>
                        </Flex>
                        <Flex align={"flex-end"} ml={"30px"}>
                          <Button
                            background="transparent"
                            color="#0047BB"
                            float={"right"}
                            fontSize="18px"
                          >
                            Lixeira
                            <Icon
                              as={FaGreaterThan}
                              fontSize="13px"
                              fontWeight={"none"}
                              ml={1}
                              color="#0047BB"
                            />
                          </Button>
                        </Flex>
                      </Flex>
                      <TabelaBeneficio
                        idRanking={infosRankings.idRanking}
                        nomeRanking={infosRankings.nomeRanking}
                      />
                    </Flex>
                  </Stack>
                </Flex>
              </FormControl>
            </ModalBody>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalBeneficio;
