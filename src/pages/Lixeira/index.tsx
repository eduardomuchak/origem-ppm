import { useState } from "react";

import {
  Box,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import moment from "moment";

import PaginacaoTabela from "components/PaginacaoTabela";
import Sidebar from "components/SideBar";

import { DeleteModal } from "./ModalDeletar";
import { RestoreModal } from "./ModalRestaurar";

export function TabelaLixeira() {
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(5);

  const fromTo = {
    from,
    to,
    setFrom,
    setTo,
  };

  const rows = [
    {
      id: "1",
      nome: "Projetos",
      qtd: "1000",
    },
    {
      id: "2",
      nome: "spt",
      qtd: "1000",
    },
  ];

  return (
    <>
      <Sidebar>
        <Box
          paddingTop={{ base: "5", sm: "10" }}
          paddingBottom={{ base: "5", sm: "10" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "white", sm: "white" }}
          boxShadow={{
            base: "none",
            sm: useColorModeValue("md", "md-dark"),
          }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Flex
            mt={-5}
            ml={-5}
            mr={-5}
            flexDirection={"row"}
            justify={"space-between"}
            mb={1}
            wrap={"wrap"}
          >
            <Heading
              fontFamily={"Mulish"}
              fontWeight={"700"}
              fontSize={"24px"}
              color={"#2D2926"}
            >
              Lixeira
            </Heading>
            <Flex direction={"column"} w={"100%"} mr={-10}>
              <TableContainer
                mt={4}
                mb={4}
                borderRadius={"10px"}
                // overflowX={"scroll"}
              >
                <Table variant="striped" colorScheme={"strippedGray"}>
                  <Thead backgroundColor={"origem.300"}>
                    <Tr background={"origem.500"}>
                      <Th color="white" textAlign={"center"} w={"56px"}>
                        ID
                      </Th>
                      <Th color="white" textAlign={"center"}>
                        Item
                      </Th>
                      <Th color="white" textAlign={"center"} w={"166px"}>
                        Data de Criação
                      </Th>
                      <Th color="white" textAlign={"center"} w={"104px"}>
                        Data de Exclusão
                      </Th>
                      <Th color="white" textAlign={"center"} w={"104px"}>
                        Ações
                      </Th>
                    </Tr>
                  </Thead>
                  {/* <Tbody scrollBehavior={"smooth"}> */}
                  <Tbody>
                    {rows &&
                      rows.map((row) => (
                        <Tr textColor={"#2D2926"} fontWeight={"semibold"}>
                          <Td textAlign={"center"}>{row.id}</Td>
                          <Td textAlign={"center"}>{row.nome}</Td>
                          <Td textAlign={"center"}>
                            {moment().format("DDMMYYYY_hhmmss")}
                          </Td>
                          <Td textAlign={"center"}>
                            {moment().format("DDMMYYYY_hhmmss")}
                          </Td>
                          <Td textAlign={"center"}>
                            <RestoreModal id={Number(row.id)} />
                            <DeleteModal id={Number(row.id)} />
                          </Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </TableContainer>

              <Flex>
                <PaginacaoTabela data={rows} fromTo={fromTo} />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Sidebar>
    </>
  );
}