import { useNavigate } from "react-router-dom";

import { Flex, Heading, Text } from "@chakra-ui/react";

import { formatDate } from "utils/formatDate";
import { validateDate } from "utils/validateDate";

type Poco = {
  id?: number;
  comp_pct: number;
  finalplanejado: string;
  id_campanha: number;
  id_poco: number;
  inicioplanejado: string;
  pct_plan: number;
  pct_real: number;
  poco: string;
  sonda: string;
};

type Props = {
  poco: Poco;
  index: number;
};

function CardPIR({ poco, index }: Props) {
  const navigate = useNavigate();
  const dataInicioFormatada = formatDate(new Date(poco.inicioplanejado));
  const dataFimFormatada = formatDate(new Date(poco.finalplanejado));

  const transfer = () => {
    navigate(`/infographics/atividade/${poco.id}`, {
      state: {
        poco,
      },
    });
  };

  return (
    <>
      {/* A data 31/12/1969 é o valor de null no banco de dados.
      Se o valor for exatamente esse, o componente não deverá ser renderizado. */}
      <Flex direction={"row"} gap={4} onClick={() => transfer()}>
        <Flex align={"center"} justify={"center"}>
          <Heading as="h3" size="md" textAlign={"center"} width={"60px"}>
            {index === 0 ? "Atual" : `${index + 1}º`}
          </Heading>
        </Flex>
        <Flex
          direction={"column"}
          align={"center"}
          justify={"center"}
          backgroundColor={validateDate(
            Number(poco.pct_plan),
            Number(poco.comp_pct),
            Number(poco.pct_real)
          )}
          px={5}
          py={3}
          borderRadius={12}
          _hover={{
            cursor: "pointer",
          }}
          gap={2}
          minW={"220px"}
        >
          <Flex>
            <Text fontSize={"lg"} color={"white"} fontWeight={"bold"}>
              {poco.poco}
            </Text>
          </Flex>
          <Flex direction={"column"} w={"100%"}>
            <Flex direction={"row"} justify={"space-between"} w={"100%"}>
              <Text
                fontSize={"md"}
                color={"white"}
                fontWeight={"bold"}
                textAlign={"start"}
                flex={1}
              >
                Data Início:
              </Text>
              <Text
                fontSize={"md"}
                color={"white"}
                fontWeight={"semi-bold"}
                textAlign={"end"}
                ml={1}
                flex={1}
              >
                {dataInicioFormatada}
              </Text>
            </Flex>
            <Flex direction={"row"} justify={"space-between"} w={"100%"}>
              <Text
                fontSize={"md"}
                color={"white"}
                fontWeight={"bold"}
                textAlign={"start"}
                flex={1}
              >
                Data Fim:
              </Text>
              <Text
                fontSize={"md"}
                color={"white"}
                fontWeight={"semi-bold"}
                textAlign={"end"}
                ml={1}
                flex={1}
              >
                {dataFimFormatada}
              </Text>
            </Flex>
            <Flex direction={"row"} justify={"space-between"} w={"100%"}>
              <Text
                fontSize={"md"}
                color={"white"}
                fontWeight={"bold"}
                textAlign={"start"}
                flex={1}
              >
                Planejado:
              </Text>
              <Text
                fontSize={"md"}
                color={"white"}
                fontWeight={"semi-bold"}
                textAlign={"end"}
                ml={1}
                flex={1}
              >
                {`${poco.pct_plan}%`}
              </Text>
            </Flex>
            <Flex direction={"row"} justify={"space-between"} w={"100%"}>
              <Text
                fontSize={"md"}
                color={"white"}
                fontWeight={"bold"}
                textAlign={"start"}
                flex={1}
              >
                Realizado:
              </Text>
              <Text
                fontSize={"md"}
                color={"white"}
                fontWeight={"semi-bold"}
                textAlign={"end"}
                ml={1}
                flex={1}
              >
                {`${poco.pct_real}%`}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default CardPIR;
