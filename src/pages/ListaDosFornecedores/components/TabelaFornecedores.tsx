import { useState } from "react";
import { MdModeEdit } from "react-icons/md";

import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  IconButton,
  Flex,
} from "@chakra-ui/react";

import PaginacaoTabela from "components/PaginacaoTabela";

import { Fornecedor } from "../index";

type TabelaFornecedoresProps = {
  fornecedores: Fornecedor[];
  onEdit: (fornecedor: Fornecedor) => any;
};

export function TabelaFornecedores({
  fornecedores,
  onEdit,
}: TabelaFornecedoresProps) {
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(7);

  const fromTo = {
    from,
    to,
    setFrom,
    setTo,
  };

  const orcSum = fornecedores
    .map((forn) => forn.orcamento)
    .reduce(
      (acumulador: number, valorAtual: number) => acumulador + valorAtual,
      0
    );
  // console.log(fornecedores.map((forn) => forn.orcamento));

  const realSum = fornecedores
    .map((forn) => forn.realizado)
    .reduce(
      (acumulador: number, valorAtual: number) => acumulador + valorAtual,
      0
    );
  // console.log(realSum);

  const tableData = fornecedores
    .sort((a, b) => a.id - b.id)
    .slice(from, to)
    .map((fornecedor, index) => (
      <Tr key={index}>
        <Td isNumeric fontWeight={"semibold"}>
          {fornecedor.id}
        </Td>
        <Td fontWeight={"semibold"}>{fornecedor.fornecedor}</Td>
        <Td fontWeight={"semibold"}>
          {fornecedor.orcamento.toLocaleString("pt-br")}
        </Td>
        <Td fontWeight={"semibold"}>
          {fornecedor.realizado.toLocaleString("pt-br")}
        </Td>
        <Td fontWeight={"semibold"}>{fornecedor.responsavel}</Td>
        <Td width="406px" height={"56px"}>
          {fornecedor.descricao}
        </Td>
        <Td>
          <IconButton
            aria-label="Plus sign"
            icon={<MdModeEdit />}
            background="transparent"
            variant="secondary"
            color="#0047BB"
            mr={2}
            isRound={true}
            size="sm"
            onClick={() => onEdit(fornecedor)}
            width={"18px"}
            height={"18px"}
          />
        </Td>
      </Tr>
    ));

  return (
    <>
      <TableContainer mt={4} mb={3} borderRadius={"10px"} overflowX={"scroll"}>
        <Table variant="striped" colorScheme={"strippedGray"}>
          <Thead>
            <Tr background={"origem.500"}>
              <Th color={"white"} textAlign={"center"}>
                ID
              </Th>
              <Th color={"white"} textAlign={"center"}>
                Fornecedor
              </Th>
              <Th color={"white"} textAlign={"center"}>
                Orçamento
              </Th>
              <Th color={"white"} textAlign={"center"}>
                Realizado
              </Th>
              <Th color={"white"} textAlign={"center"}>
                Responsável
              </Th>
              <Th color={"white"} textAlign={"center"}>
                Descrição e justificativa
              </Th>
              <Th color={"white"} textAlign={"center"}>
                Ações
              </Th>
            </Tr>
          </Thead>
          <Tbody scrollBehavior={"smooth"}>{tableData}</Tbody>
          <Tfoot>
            <Tr background={"origem.500"}>
              <Th color="white">Total</Th>
              <Th></Th>
              <Th color="white">{orcSum.toLocaleString("pt-br")}</Th>
              <Th color="white">{realSum.toLocaleString("pt-br")}</Th>
              <Th color="white"></Th>
              <Th color="white"></Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Flex>
        <PaginacaoTabela data={fornecedores} fromTo={fromTo} />
      </Flex>
    </>
  );
}
