import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
  Input,
  Select,
} from "@chakra-ui/react";
import { Ring } from "@uiball/loaders";

// import { TextError } from "components/TextError";

import { handleCadastrar, handleCancelar } from "utils/handleCadastro";

import { useCadastroNovaPriorizacao } from "hooks/useCadastrarNovaPriorizacao";

function ModalCadastrarPriorizacao() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { registerForm, loading } = useCadastroNovaPriorizacao();

  // console.log(registerForm.values);
  const perfis = ["Nível 0", "Nível 1", "Nível 2"];

  useEffect(() => {
    registerForm.setFieldValue("id_area_responsavel", 1);
    registerForm.setFieldValue("num_peso", 1);
  }, []);

  return (
    <>
      <Button
        onClick={onOpen}
        color={"white"}
        backgroundColor={"origem.500"}
        aria-label="Plus sign"
        variant="primary"
        _hover={{
          background: "origem.300",
          transition: "all 0.4s",
        }}
      >
        Cadastrar
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
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
            Configuração
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
                          >
                            <IoIosArrowBack /> Priorização
                          </Button>
                        </Text>
                      </Flex>
                      <Flex direction={"column"}>
                        <Flex
                          flexDirection={useBreakpointValue({
                            base: "column",
                            md: "row",
                          })}
                          gap={5}
                          mt={"10px"}
                        >
                          <FormControl>
                            <FormLabel
                              htmlFor="nom_ranking"
                              fontSize={"12px"}
                              mb={"1px"}
                              ml={"3px"}
                            >
                              NOME DA PRIORIZAÇÃO
                            </FormLabel>
                            <Input
                              ml={"3px"}
                              w={"400px"}
                              isRequired
                              placeholder="Nome"
                              id="nom_ranking"
                              name="nom_ranking"
                              value={registerForm.values.nom_ranking}
                              onChange={registerForm.handleChange}
                            />
                            {/* {registerForm.errors.nom_ranking && (
                              <TextError>
                                {registerForm.errors.nom_ranking}
                              </TextError> */}
                            {/* )} */}
                          </FormControl>
                        </Flex>

                        <Flex
                          flexDirection={useBreakpointValue({
                            base: "column",
                            md: "row",
                          })}
                          gap={5}
                          mt={"10px"}
                        >
                          <FormControl>
                            <FormLabel
                              htmlFor="regulatorio.opcao_id"
                              fontSize={"12px"}
                              mb={"1px"}
                              w={"550px"}
                              mt={"5px"}
                            >
                              PERFIS COM ACESSO
                            </FormLabel>
                            <Select
                              id="pit"
                              name="pit"
                              placeholder="Selecione"
                              // value={activitiesForm.values.pit}
                              // onChange={activitiesForm.handleChange}
                              w={useBreakpointValue({
                                base: "100%",
                                md: "95%",
                              })}
                            >
                              {perfis.map((perfil: any, index: any) => (
                                <option key={index}>{perfil}</option>
                              ))}
                            </Select>
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Stack>
                </Flex>
              </FormControl>
            </ModalBody>

            <ModalFooter justifyContent={"center"}>
              <Flex gap={2}>
                <Button
                  variant="ghost"
                  color="red"
                  onClick={() => handleCancelar(registerForm, onClose)}
                  _hover={{
                    background: "red.500",
                    transition: "all 0.4s",
                    color: "white",
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  disabled={!registerForm.isValid}
                  background="origem.300"
                  variant="primary"
                  color="white"
                  onClick={() => handleCadastrar(registerForm, onClose)}
                  _hover={{
                    background: "origem.500",
                    transition: "all 0.4s",
                  }}
                >
                  {loading ? (
                    <Ring speed={2} lineWeight={5} color="white" size={24} />
                  ) : (
                    <>
                      <Text>Cadastrar</Text>
                    </>
                  )}
                </Button>
              </Flex>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalCadastrarPriorizacao;