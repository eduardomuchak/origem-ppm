import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";

import CardACT from "pages/ActivitiesSchedule/Components/CardACT";

import { Area, Atividade } from "../interfaces";
import AtividadesPorStatus from "./AtividadesPorStatus";
import TotalAtividades from "./TotalAtividades";
interface Props {
  area: Area;
}

function AccordionArea({ area }: Props) {
  return (
    <Accordion allowMultiple w={"100%"}>
      <AccordionItem>
        <AccordionButton py={0}>
          <Flex
            w={"100%"}
            justify={"space-between"}
            align={"center"}
            h={"120px"}
          >
            <Flex basis={"100%"} h={"100%"}>
              <Flex
                borderRight={"1px"}
                borderColor={"#E2E8F0"}
                grow={1}
                align={"center"}
                justify={"center"}
                h={"100%"}
              >
                <Text fontSize="lg" mr={5} fontWeight={600}>
                  {area.area}
                </Text>
              </Flex>
              <Flex grow={30} align={"center"} justify={"space-around"}>
                <Text fontWeight={600}>{`${area.pctTotalConcluido}%`}</Text>
                <TotalAtividades totalAtividades={area.totalAtividades} />
                <AtividadesPorStatus status={area.status} />
              </Flex>
            </Flex>
            <Flex grow={1}>
              <AccordionIcon />
            </Flex>
          </Flex>
        </AccordionButton>

        <AccordionPanel pb={4}>
          <Flex
            direction={"row"}
            align={"center"}
            justify={"center"}
            gap={5}
            p={5}
            w={"100%"}
            wrap={"wrap"}
          >
            {area.atividades.map((atividade: Atividade, index: number) => (
              <Flex key={index}>
                <CardACT atividade={atividade} />
              </Flex>
            ))}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionArea;
