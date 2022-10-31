import { Button, Text } from "@chakra-ui/react";
import { FormikProps } from "formik";

import { handleCancelar } from "utils/handleCadastro";

interface Props {
  text: string; // Texto do botão
  leftIcon?: any; // Componente React Icons do Ícone
  rightIcon?: any; // Componente React Icons do Ícone
  formikForm: FormikProps<any>;
  onClose: Function; // Função padrão useDisclosure ChakraUi para fechar o Modal
}

function BotaoVermelhoGhost({
  text,
  leftIcon,
  rightIcon,
  formikForm,
  onClose,
}: Props) {
  return (
    <Button
      h={"56px"}
      w={"208px"}
      borderRadius={"8px"}
      variant="ghost"
      color="red.500"
      onClick={() => handleCancelar(formikForm, onClose)}
      _hover={{
        background: "red.500",
        transition: "all 0.4s",
        color: "white",
      }}
      leftIcon={leftIcon || null}
      rightIcon={rightIcon || null}
    >
      <Text fontSize="18px" fontWeight={"700"} fontFamily={"Mulish"}>
        {text}
      </Text>
    </Button>
  );
}

export default BotaoVermelhoGhost;
