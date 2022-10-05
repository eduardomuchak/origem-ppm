// import { useEffect, useState } from "react";

import { useRef, useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { FiPrinter, FiPlus } from "react-icons/fi";
import ReactToPrint from "react-to-print";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
// import { Ring } from "@uiball/loaders";

import Sidebar from "components/SideBar";

import { GraficoNPTPorPeriodoSPT } from "./components/NPTPorPeriodoSPT";
import { GraficoPorCadaIntervencao } from "./components/PorCadaIntervencao";
import { GraficoPorDuracao } from "./components/PorDuracao";

export function GráficosEstatisticos() {
  interface TypeProps {
    name: string;
    value: string;
  }

  const graphics: TypeProps[] = [
    { name: "Histórico de durações", value: "1" },
    { name: "Relatório de cada intervenção", value: "2" },
    { name: "Relatório Tempo NPT por período / SPT", value: "3" },
  ];

  function Props() {
    return (
      <Flex align={"flex-start"}>
        <ReactToPrint
          trigger={() => (
            <Button
              variant="ghost"
              // colorScheme="messenger"
              fontSize={"18px"}
              fontWeight={"700"}
              color={"#0047BB"}
              rightIcon={<AiFillPrinter />}
              disabled={report == "0" || report == ""}
            >
              Exportar
            </Button>
          )}
          content={() => componentRef.current}
        />
      </Flex>
    );
  }
  function handleReportButton(report: string) {
    return (
      <>
        {report == "1" && <GraficoPorDuracao Prop={Props} />}
        {report == "2" && <GraficoPorCadaIntervencao Prop={Props} />}
        {report == "3" && <GraficoNPTPorPeriodoSPT Prop={Props} />}
      </>
    );
  }

  const [report, setReport] = useState("0");
  const [loading, setLoading] = useState(true);

  let initialValue = "1";

  const componentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setReport(initialValue);
    setLoading(false);
  };

  return (
    <>
      <Sidebar>
        {/* {loading && (
          <Flex display={"flex"} align={"center"} justify={"center"} h={"90vh"}>
            <Ring speed={2} lineWeight={5} color="blue" size={64} />
          </Flex>
        )} */}
        {loading && (
          <Stack spacing="8">
            <Flex w={"auto"} align="center" justify="center" bg="#EDF2F7">
              <Box
                py={{ base: "0", sm: "16" }}
                px={{ base: "4", sm: "10" }}
                w="80rem"
                h="38.5rem"
                bg="white"
                boxShadow={{
                  base: "none",
                  sm: "md",
                }}
                borderRadius={{ base: "none", sm: "xl" }}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // projectsForm.handleSubmit(e);
                  }}
                >
                  <Stack spacing="5">
                    <Flex flexDirection={"column"}>
                      <Flex justifyContent={"space-between"}>
                        <Flex align={"flex-end"}>
                          <FormControl mt={"-190px"}>
                            <FormLabel htmlFor="name">
                              <Text
                                mb={"24px"}
                                fontSize={"24px"}
                                color={"#2D2926"}
                                fontWeight={"700"}
                                fontFamily={"Mulish"}
                              >
                                Gráficos estatísticos
                              </Text>
                            </FormLabel>
                          </FormControl>
                        </Flex>
                        <Flex align={"flex-start"}>
                          <ReactToPrint
                            trigger={() => (
                              <Button
                                variant="ghost"
                                colorScheme="messenger"
                                rightIcon={<FiPrinter />}
                                disabled={report == "0" || report == ""}
                              >
                                Exportar
                              </Button>
                            )}
                            content={() => componentRef.current}
                          />
                        </Flex>
                      </Flex>

                      <Flex direction={"row"} gap={4}>
                        <Flex alignItems={"flex-end"}>
                          <FormControl>
                            <FormLabel
                              fontSize={"12px"}
                              color={"#A7A7A7"}
                              htmlFor="gera-grafico"
                            >
                              GERAR GRÁFICO POR
                            </FormLabel>
                            <Select
                              mt={"-6px"}
                              id="gera-grafico"
                              name="gera-grafico"
                              width={"480px"}
                              height={"56px"}
                              borderRadius={"8px"}
                              placeholder="Tipo de gráfico"
                              onChange={(e) => {
                                initialValue = e.target.value;
                              }}
                            >
                              {graphics &&
                                graphics.map((reportType) => (
                                  <option value={reportType.value}>
                                    {reportType.name}
                                  </option>
                                ))}
                            </Select>
                          </FormControl>
                        </Flex>

                        <Flex>
                          <FormControl>
                            <FormLabel
                              fontSize={"12px"}
                              color={"#A7A7A7"}
                              htmlFor="de"
                            >
                              DE
                            </FormLabel>
                            <Input
                              mt={"-6px"}
                              id="de"
                              name="de"
                              width={"120px"}
                              height={"56px"}
                              borderRadius={"8px"}
                              type={"date"}
                            />
                          </FormControl>
                        </Flex>

                        <Flex>
                          <FormControl>
                            <FormLabel
                              fontSize={"12px"}
                              color={"#A7A7A7"}
                              htmlFor="ate"
                              alignItems={"flex-start"}
                            >
                              <Text>ATÉ</Text>
                            </FormLabel>
                            <Input
                              mt={"-6px"}
                              id="ate"
                              name="ate"
                              width={"120px"}
                              height={"56px"}
                              borderRadius={"8px"}
                              type={"date"}
                            />
                          </FormControl>
                        </Flex>
                        <Flex>
                          <FormControl className="toBottom">
                            <Button
                              h={"56px"}
                              background={"white"}
                              border={"2.3px solid"}
                              color={"#0047BB"}
                              variant="primary"
                              _hover={{
                                background: "origem.500",
                                color: "white",
                                transition: "all 0.4s",
                              }}
                              rightIcon={<FiPlus />}
                              fontSize={"18px"}
                              fontWeight={"700"}
                              onClick={handleClick}
                            >
                              Gerar
                            </Button>
                          </FormControl>
                        </Flex>
                      </Flex>
                      <Text
                        fontWeight={"400"}
                        fontSize={"14px"}
                        align={"center"}
                        color={"#A1A1A1"}
                        mt={"190px"}
                      >
                        Selecione um tipo de Gráfico
                      </Text>
                    </Flex>
                  </Stack>
                </form>
              </Box>
            </Flex>
          </Stack>
        )}
        <Flex mt={"30px"} ref={componentRef}>
          {handleReportButton(report)}
        </Flex>
      </Sidebar>
    </>
  );
}

// bug do eixo y
