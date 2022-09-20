import { Flex } from "@chakra-ui/react";

import BotaoDescricaoEJustificativa from "./BotaoDescricaoEJustificativa";
import BotaoListadeTarefas from "./BotaoListaDeTarefas";
import BotaoLicoesAprendidas from "./LicoesAprendidas/LicoesAprendidasModal";

function BotoesModais() {
  return (
    <>
      <Flex
        backgroundColor={"white"}
        borderRadius={6}
        direction={"column"}
        grow={1}
        shrink={1}
        basis={"100px"}
      >
        <BotaoDescricaoEJustificativa />
        <BotaoListadeTarefas />
        <BotaoLicoesAprendidas />
      </Flex>
    </>
  );
}

export default BotoesModais;
