import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  FormControl,
  Stack,
  useBreakpointValue,
  Input,
  Textarea,
  Text,
} from "@chakra-ui/react";

import BotaoAzulPrimary from "components/BotaoAzul/BotaoAzulPrimary";
import BotaoVermelhoGhost from "components/BotaoVermelho/BotaoVermelhoGhost";
import { RequiredField } from "components/RequiredField/RequiredField";
import { TextError } from "components/TextError";

import { regexCaracteresEspeciais } from "utils/regex";

import { useCadastroProjetoTipo } from "hooks/useCadastroProjetoTipo";

import AtividadesDragAndDrop from "./AtividadesDragAndDrop";

function ModalCadastroProjetoTipo({ refresh, setRefresh }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { registerForm, loading, listaAtividadesPrecedentes } =
    useCadastroProjetoTipo();

  return (
    <>
      <Button
        h={"56px"}
        borderRadius={"10px"}
        background={"white"}
        border={"2px solid"}
        color={"origem.500"}
        _hover={{
          border: "2px solid",
          borderColor: "origem.500",
          background: "origem.500",
          transition: "all 0.4s",
          color: "white",
        }}
        textColor={"origem.500"}
        onClick={onOpen}
      >
        Projeto
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
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
            Cadastrar Projeto Tipo
          </ModalHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              registerForm.handleSubmit(e);
            }}
          >
            <ModalBody mt={3}>
              <FormControl>
                <Flex direction={"column"} gap={4}>
                  <Stack>
                    <Flex
                      flexDirection={useBreakpointValue({
                        base: "column",
                        md: "row",
                      })}
                      gap={5}
                    >
                      <Flex
                        w={useBreakpointValue({
                          base: "100%",
                          md: "50%",
                        })}
                        direction={"column"}
                      >
                        <Text fontWeight={"bold"}>Nome</Text>
                        <Flex gap={1}>
                          <RequiredField />
                          <Text
                            fontWeight={"bold"}
                            fontSize={"12px"}
                            color={"#949494"}
                          >
                            NOME
                          </Text>
                        </Flex>
                        <Input
                          h={"56px"}
                          isRequired
                          placeholder="Nome do Tipo de Projeto"
                          id="nom_projeto_tipo"
                          type="text"
                          name="nom_projeto_tipo"
                          value={regexCaracteresEspeciais(
                            registerForm.values.nom_projeto_tipo
                          )}
                          onChange={registerForm.handleChange}
                          maxLength={100}
                        />
                        {registerForm.errors.nom_projeto_tipo &&
                          registerForm.touched.nom_projeto_tipo && (
                            <TextError>
                              {registerForm.errors.nom_projeto_tipo}
                            </TextError>
                          )}
                      </Flex>
                    </Flex>
                  </Stack>

                  <AtividadesDragAndDrop
                    registerForm={registerForm}
                    listaAtividadesPrecedentes={listaAtividadesPrecedentes}
                  />

                  <Stack>
                    <Flex
                      flexDirection={useBreakpointValue({
                        base: "column",
                        md: "row",
                      })}
                      gap={5}
                    >
                      <FormControl>
                        <Text fontWeight={"bold"}>Comentários</Text>
                        <Flex gap={1}>
                          <Text
                            fontWeight={"bold"}
                            fontSize={"12px"}
                            color={"#949494"}
                          >
                            COMENTÁRIOS
                          </Text>
                        </Flex>
                        <Textarea
                          isRequired
                          placeholder="Adicione comentários sobre o projeto"
                          id="comentarios"
                          name="comentarios"
                          value={regexCaracteresEspeciais(
                            registerForm.values.comentarios
                          )}
                          onChange={registerForm.handleChange}
                          maxLength={255}
                        />
                        {registerForm.errors.comentarios &&
                          registerForm.touched.comentarios && (
                            <TextError>
                              {registerForm.errors.comentarios}
                            </TextError>
                          )}
                      </FormControl>
                    </Flex>
                  </Stack>
                </Flex>
              </FormControl>
            </ModalBody>

            <ModalFooter justifyContent={"center"}>
              {/* <Flex gap={2}>
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
                  onClick={() =>
                    handleCadastrarRefresh(
                      registerForm,
                      onClose,
                      setRefresh,
                      refresh
                    )
                  }
                  _hover={{
                    background: "origem.500",
                    transition: "all 0.4s",
                  }}
                >
                  {loading ? (
                    <Ring speed={2} lineWeight={5} color="white" size={24} />
                  ) : (
                    <>
                      <Text>Concluir Cadastro</Text>
                    </>
                  )}
                </Button>
              </Flex> */}
              <Flex gap={2}>
                <BotaoVermelhoGhost
                  text={"Cancelar"}
                  formikForm={registerForm}
                  onClose={onClose}
                />
                <BotaoAzulPrimary
                  text={"Concluir Cadastro"}
                  formikForm={registerForm}
                  onClose={onClose}
                  setRefresh={setRefresh}
                  refresh={refresh}
                  loading={loading}
                />
              </Flex>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalCadastroProjetoTipo;
