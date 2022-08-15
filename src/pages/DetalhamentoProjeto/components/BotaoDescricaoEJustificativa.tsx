import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

function BotaoDescricaoEJustificativa() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        background={'white'}
        color={'origem.300'}
        _hover={{
          background: 'origem.500',
          color: 'white',
          transition: 'all 0.4s',
        }}
        px={6}
        py={9}
        borderTopRadius={'6px'}
        borderBottomRadius={'0px'}
      >
        Descrição e Justificativa
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Descrição e Justificativa</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BotaoDescricaoEJustificativa;
