import { FiTrash } from "react-icons/fi";

import {
  Button,
  Flex,
  FormControl,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  IconButton,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";

function ModalDeletar({ id, onDelete, newRender }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        onClick={onOpen}
        color={"white"}
        fontWeight={"700"}
        backgroundColor={"transparent"}
        aria-label="Botão excluir"
        _hover={{
          backgroundColor: "transparent",
          color: "white",
        }}
        w={"24px"}
        minW={"24px"}
        maxW={"24px"}
        h={"16px"}
        minH={"14px"}
        maxH={"18px"}
      >
        <FiTrash size={16} />
      </IconButton>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color={"white"} />
          <ModalHeader
            backgroundColor={"#2E69FD"}
            borderTopRadius={7}
            display={"flex"}
            justifyContent={"center"}
            color={"white"}
            fontSize={"14px"}
            fontWeight={"700"}
            height={"48px"}
          >
            Excluir
          </ModalHeader>

          <ModalCloseButton color={"white"} />
          <ModalBody mt={3}>
            <FormControl>
              <Flex direction={"column"} gap={4}>
                <Stack gap={2}>
                  <Flex>
                    <Text
                      fontSize={"20px"}
                      mb={"1px"}
                      color={"#010101"}
                      fontWeight={"400"}
                    >
                      Tem certeza que deseja mover esta atividade para a
                      Lixeira?
                    </Text>
                  </Flex>
                </Stack>
              </Flex>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Flex gap={2}>
              <Button
                variant="ghost"
                color="#F40606"
                onClick={() => onClose()}
                _hover={{
                  background: "red.600",
                  transition: "all 0.4s",
                  color: "white",
                }}
                height={"56px"}
                width={"206px"}
                fontSize={"18px"}
                fontWeight={"700"}
              >
                Cancelar
              </Button>
              <Button
                background="origem.500"
                variant="primary"
                color="white"
                onClick={() => {
                  newRender();
                  onDelete();
                  onClose();
                }}
                _hover={{
                  background: "origem.600",
                  transition: "all 0.4s",
                }}
                height={"56px"}
                width={"206px"}
                fontSize={"18px"}
                fontWeight={"700"}
              >
                <>
                  <Text>Confirmar</Text>
                </>
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalDeletar;
