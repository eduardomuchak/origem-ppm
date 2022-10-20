import { useState } from "react";

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
  useBreakpointValue,
  Input,
  Text,
  ModalCloseButton,
} from "@chakra-ui/react";

import BotaoAzulLargoPrimary from "components/BotaoAzulLargo/BotaoAzulLargoPrimary";
import BotaoVermelhoLargoGhost from "components/BotaoVermelhoLargo/BotaoVermelhoLargoGhost";
import { RequiredField } from "components/RequiredField/RequiredField";
import { TextError } from "components/TextError";

import { handleCancelar } from "utils/handleCadastro";
import { regexCaracteresEspeciais } from "utils/regex";

import { useCadastroSonda } from "hooks/useCadastroSonda";

function ModalCadastrarSonda() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { registerForm, loading } = useCadastroSonda();
  const [refresh, setRefresh] = useState(false);

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
        Sonda
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
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
            Cadastrar SPT
          </ModalHeader>
          <ModalCloseButton
            color={"white"}
            onClick={() => handleCancelar(registerForm, onClose)}
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              registerForm.handleSubmit(e);
            }}
          >
            <ModalBody mt={3}>
              <FormControl>
                <Flex direction={"column"} gap={4}>
                  <Flex
                    flexDirection={useBreakpointValue({
                      base: "column",
                      md: "row",
                    })}
                    gap={5}
                    align={"center"}
                    justify={"center"}
                  >
                    <FormControl w={"275px"}>
                      <Flex gap={1}>
                        <RequiredField />
                        <Text
                          fontWeight={"bold"}
                          fontSize={"12px"}
                          color={"#949494"}
                        >
                          SPT
                        </Text>
                      </Flex>
                      <Input
                        h={"56px"}
                        isRequired
                        placeholder="Nome do SPT"
                        id="nome"
                        type="text"
                        name="nome"
                        value={regexCaracteresEspeciais(
                          registerForm.values.nome
                        )}
                        onChange={registerForm.handleChange}
                        maxLength={10}
                      />
                      {registerForm.errors.nome && (
                        <TextError>{registerForm.errors.nome}</TextError>
                      )}
                    </FormControl>
                  </Flex>
                </Flex>
              </FormControl>
            </ModalBody>

            <ModalFooter justifyContent={"center"}>
              <Flex gap={2}>
                <BotaoVermelhoLargoGhost
                  text={"Cancelar"}
                  formikForm={registerForm}
                  onClose={onClose}
                />
                <BotaoAzulLargoPrimary
                  text={"Cadastrar"}
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

export default ModalCadastrarSonda;
