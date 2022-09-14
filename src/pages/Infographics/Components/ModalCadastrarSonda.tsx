import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Stack,
  useBreakpointValue,
  Input,
} from '@chakra-ui/react';
import { Ring } from '@uiball/loaders';

import { TextError } from 'components/TextError';

import { handleCadastrar, handleCancelar } from 'utils/handleCadastro';

import { useCadastroSonda } from 'hooks/useCadastroSonda';

function ModalCadastrarSonda() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { registerForm, loading } = useCadastroSonda();

  return (
    <>
      <Button
        variant="outline"
        border={'2px solid'}
        borderColor={'origem.500'}
        textColor={'origem.500'}
        _hover={{
          borderColor: 'origem.600',
          backgroundColor: 'origem.500',
          textColor: 'white',
          transition: 'all 0.4s',
        }}
        onClick={onOpen}
      >
        Sonda
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            backgroundColor={'#2E69FD'}
            borderTopRadius={7}
            display={'flex'}
            justifyContent={'center'}
            color={'white'}
            fontSize={'1em'}
          >
            Cadastrar Sonda
          </ModalHeader>
          <ModalCloseButton color={'white'} />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              registerForm.handleSubmit(e);
            }}
          >
            <ModalBody mt={3}>
              <FormControl>
                <Flex direction={'column'} gap={4}>
                  <Stack>
                    <Flex
                      flexDirection={useBreakpointValue({
                        base: 'column',
                        md: 'row',
                      })}
                      gap={5}
                    >
                      <FormControl>
                        <FormLabel>NOME</FormLabel>
                        <Input
                          isRequired
                          placeholder="Nome da Sonda"
                          id="nomeSpt"
                          type="text"
                          name="nomeSpt"
                          value={registerForm.values.nomeSpt}
                          onChange={registerForm.handleChange}
                        />
                        {registerForm.errors.nomeSpt &&
                          registerForm.touched.nomeSpt && (
                            <TextError>{registerForm.errors.nomeSpt}</TextError>
                          )}
                      </FormControl>
                    </Flex>
                  </Stack>
                </Flex>
              </FormControl>
            </ModalBody>

            <ModalFooter justifyContent={'center'}>
              <Flex gap={2}>
                <Button
                  variant="ghost"
                  color="red"
                  onClick={() => handleCancelar(registerForm, onClose)}
                  _hover={{
                    background: 'red.500',
                    transition: 'all 0.4s',
                    color: 'white',
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
                    background: 'origem.500',
                    transition: 'all 0.4s',
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
              </Flex>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalCadastrarSonda;