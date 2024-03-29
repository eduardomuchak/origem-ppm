import { AiFillPlusCircle } from "react-icons/ai";
import { MdEdit } from "react-icons/md";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Text,
  Flex,
  Box,
  Select,
  Textarea,
  Center,
} from "@chakra-ui/react";

// import { useRegisterProjectType } from '../../../hooks/useRegisterProjectType';
import styles from "./RegisterProjectType.module.scss";

type Props = {
  onClose: any;
  isOpen: boolean;
};

export function RegisterProjectType({ isOpen, onClose }: Props) {
  // const { registerForm, loading } = useRegisterProjectType();

  // console.log(registerForm.isValid);
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
      <ModalOverlay className={styles.overlay} />
      <ModalContent width="70%" height={580} borderRadius={8} marginTop={3}>
        <ModalHeader
          backgroundColor={"#2E69FD"}
          borderTopRadius={7}
          display={"flex"}
          justifyContent={"center"}
          color={"white"}
          fontSize={"1em"}
        >
          Cadastrar projeto tipo
        </ModalHeader>
        <ModalCloseButton color={"white"} />
        <ModalBody>
          <Text
            fontWeight="500"
            fontSize="16px"
            lineHeight="20px"
            marginBottom="10px"
          >
            Nome
          </Text>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // registerForm.handleSubmit(e);
            }}
          >
            <Flex gap={2} marginBottom={5}>
              <Box>
                <Text color="#D6D4D4" fontSize="12px">
                  ID
                </Text>
                <Input
                  size="md"
                  type="date"
                  width="90%"
                  color="#D6D4D4"
                  id="nameId"
                  name="nameId"
                  // value={registerForm.values.nameId}
                  // onChange={registerForm.handleChange}
                />
              </Box>
              <Box>
                <Text color="#D6D4D4" fontSize="12px">
                  NOME
                </Text>
                <Input
                  size="md"
                  width="150%"
                  placeholder="Campanha"
                  _placeholder={{ color: "#D6D4D4" }}
                  id="projectName"
                  name="projectName"
                  // value={registerForm.values.projectName}
                  // onChange={registerForm.handleChange}
                />
              </Box>
            </Flex>
            <Text
              fontWeight="500"
              fontSize="16px"
              lineHeight="20px"
              marginBottom="10px"
            >
              Atividades
            </Text>
            <Flex gap={2} marginBottom={4} justifyContent="space-between">
              <Box>
                <Text color="#D6D4D4" fontSize="12px">
                  ID
                </Text>
                <Input
                  size="md"
                  width={"5em"}
                  color="#D6D4D4"
                  placeholder="CIP02"
                  _placeholder={{ color: "#D6D4D4", fontSize: "12px" }}
                  id="activityId"
                  name="activityId"
                  // value={registerForm.values.activityId}
                  // onChange={registerForm.handleChange}
                />
              </Box>
              <Box>
                <Text color="#D6D4D4" fontSize="12px">
                  BASE
                </Text>
                <Select
                  size="md"
                  placeholder="Selecione"
                  color="#D6D4D4"
                  fontSize="12px"
                  width={"6.4em"}
                  id="activityBase"
                  name="activityBase"
                  // value={registerForm.values.activityBase}
                  // onChange={registerForm.handleChange}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
              <Box>
                <Text color="#D6D4D4" fontSize="12px">
                  TAREFA
                </Text>
                <Select
                  size="md"
                  placeholder="Selecione"
                  color="#D6D4D4"
                  fontSize="12px"
                  width={60}
                  id="activityTask"
                  name="activityTask"
                  // value={registerForm.values.activityTask}
                  // onChange={registerForm.handleChange}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
              <Box>
                <Text color="#D6D4D4" fontSize="12px">
                  PRECEDENTES
                </Text>
                <Select
                  size="md"
                  placeholder="Selecione"
                  color="#D6D4D4"
                  fontSize="12px"
                  width={60}
                  id="activityPrecedent"
                  name="activityPrecedent"
                  // value={registerForm.values.activityPrecedent}
                  // onChange={registerForm.handleChange}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
              <Box>
                <Text color="#D6D4D4" fontSize="12px">
                  DIAS
                </Text>
                <Select
                  size="md"
                  placeholder="Selecione"
                  color="#D6D4D4"
                  fontSize="12px"
                  width={"6.4em"}
                  id="activityDays"
                  name="activityDays"
                  // value={registerForm.values.activityDays}
                  // onChange={registerForm.handleChange}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
              <Box alignSelf="center" justifySelf="center" marginTop={4}>
                <button className={styles.editButton}>
                  <MdEdit fontSize="12px" />
                </button>
              </Box>
            </Flex>
            <Flex gap={2} marginBottom={2} justifyContent="space-between">
              <Box>
                <Text color="#D6D4D4" fontSize="12px">
                  ID
                </Text>
                <Input
                  size="md"
                  width={"5em"}
                  color="#D6D4D4"
                  placeholder="CIP02"
                  _placeholder={{ color: "#D6D4D4", fontSize: "12px" }}
                />
              </Box>
              <Box>
                <Text color="#D6D4D4" fontSize="12px">
                  BASE
                </Text>
                <Select
                  size="md"
                  placeholder="Selecione"
                  color="#D6D4D4"
                  fontSize="12px"
                  width={"6.4em"}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
              <Box>
                <Text color="#D6D4D4" fontSize="12px">
                  TAREFA
                </Text>
                <Select
                  size="md"
                  placeholder="Selecione"
                  color="#D6D4D4"
                  fontSize="12px"
                  width={60}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
              <Box>
                <Text color="#D6D4D4" fontSize="12px">
                  PRECEDENTES
                </Text>
                <Select
                  size="md"
                  placeholder="Selecione"
                  color="#D6D4D4"
                  fontSize="12px"
                  width={60}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
              <Box>
                <Text color="#D6D4D4" fontSize="12px">
                  DIAS
                </Text>
                <Select
                  size="md"
                  placeholder="Selecione"
                  color="#D6D4D4"
                  fontSize="12px"
                  width={"6.4em"}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
              <Box alignSelf="center" justifySelf="center" marginTop={4}>
                <button className={styles.editButton}>
                  <MdEdit fontSize="12px" />
                </button>
              </Box>
            </Flex>
            <div className={styles.dropzone}>
              <p>
                <AiFillPlusCircle />
              </p>
            </div>
            <Text
              fontWeight="500"
              fontSize="16px"
              lineHeight="20px"
              marginBottom="10px"
            >
              Observações
            </Text>
            <Textarea placeholder="Descreva suas observações" />
          </form>
        </ModalBody>

        <ModalFooter>
          <Center justifySelf="center" width="100%">
            <Button variant="ghost" color="red">
              Cancelar
            </Button>
            <Button
              colorScheme="blue"
              backgroundColor="#0047BB"
              mr={3}
              type="submit"
              color="white"
              // disabled={!registerForm.isValid}
            >
              {/* {loading ? 'Carregando' : 'Concluir cadastro'} */}
            </Button>
          </Center>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
