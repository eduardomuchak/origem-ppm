import { useEffect, useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

import {
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  Text,
} from "@chakra-ui/react";

import { getOpcoesRankings } from "services/get/Priorizacoes";

// import ModalDeletarOpcaoPriorizacao from "./DeletarOpcaoPriorizacao";
import ModalEditarOpcaoPriorizacao from "./EditarOpcaoPriorizacao";

interface TableProps {
  idRanking: any;
  nomeRanking: any;
}

export function TabelaOpcoesPriorizacao(idRanking: TableProps) {
  const [pagAtual, setPagAtual] = useState(1);
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(5);
  const rowsPerPage = 5;
  const [data, setData] = useState<any[]>([]);
  // const [loading, setLoading] = useState(false);
  // console.log("id bene", idRanking.idRanking);
  // console.log("nome bene", idRanking.nomeRanking);

  const rankingId = idRanking.idRanking;
  const rankingNome = idRanking.nomeRanking;

  const getData = async () => {
    const priorizacao = await getOpcoesRankings(rankingId);
    setData(priorizacao.data);
  };

  // console.log("data", data);

  useEffect(() => {
    getData();
  }, []);

  const totalRegs = data.length;
  const maxPage = Math.ceil(totalRegs / rowsPerPage);

  const paginate = (pag: number) => {
    setPagAtual(pag);

    const x = (pag - 1) * rowsPerPage;
    const y = (pag - 1) * rowsPerPage + rowsPerPage;
    setFrom(x);
    setTo(y);
  };

  const advance = () => {
    if (pagAtual == maxPage) {
      return;
    }

    const _pag = pagAtual + 1;

    paginate(_pag);
  };

  const back = () => {
    if (pagAtual == 1) {
      return;
    }
    const _pag = pagAtual - 1;
    paginate(_pag);
  };

  const sortData = data.sort((a: any, b: any) => a.id - b.id);
  // console.log("sortData", sortData);

  const tableData = sortData.slice(from, to).map((op) => (
    <Tr key={op.id}>
      <Td
        width={"10px"}
        style={{
          borderBottom: "0.5px solid #A7A7A7",
          borderRight: "0.5px solid #A7A7A7",
        }}
      >
        {op.id}
      </Td>
      <Td
        width={"500px"}
        style={{
          borderBottom: "0.5px solid #A7A7A7",
          borderRight: "0.5px solid #A7A7A7",
        }}
      >
        {op.nom_opcao}
      </Td>
      <Td
        width={"200px"}
        textAlign={"center"}
        style={{
          borderBottom: "0.5px solid #A7A7A7",
          borderRight: "0.5px solid #A7A7A7",
        }}
      >
        {op.num_nota}
      </Td>
      <Td
        textAlign={"center"}
        style={{
          borderBottom: "0.5px solid #A7A7A7",
          borderRight: "0.5px solid #A7A7A7",
        }}
      >
        <ModalEditarOpcaoPriorizacao
          opcaoId={op.id}
          opcaoName={op.nom_opcao}
          idRanking={idRanking}
          nameRanking={rankingNome}
          initialGrade={op.num_nota}
        />
        {/* <ModalDeletarOpcaoPriorizacao /> */}
      </Td>
    </Tr>
  ));

  return (
    <div>
      <Flex direction={"column"}>
        <TableContainer mt={6} mb={1}>
          <Table
            variant="unstyled"
            style={{
              borderBottom: "0.5px solid #A7A7A7",
              border: "0.5px solid #A7A7A7",
            }}
          >
            <Thead>
              <Tr background="origem.500" color="white">
                <Th
                  style={{
                    borderBottom: "0.5px solid #A7A7A7",
                    borderRight: "0.5px solid #A7A7A7",
                  }}
                >
                  ID
                </Th>
                <Th
                  style={{
                    borderBottom: "0.5px solid #A7A7A7",
                    borderRight: "0.5px solid #A7A7A7",
                  }}
                >
                  {rankingNome}
                </Th>
                <Th
                  textAlign={"center"}
                  style={{
                    borderBottom: "0.5px solid #A7A7A7",
                    borderRight: "0.5px solid #A7A7A7",
                  }}
                >
                  Notas
                </Th>
                <Th
                  textAlign={"center"}
                  style={{
                    borderBottom: "0.5px solid #A7A7A7",
                    borderRight: "0.5px solid #A7A7A7",
                  }}
                >
                  Ações
                </Th>
              </Tr>
            </Thead>
            <Tbody>{tableData}</Tbody>
          </Table>
        </TableContainer>

        <Flex justifyContent={"center"}>
          <Flex
            width={"300px"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton
              aria-label=""
              icon={<FiChevronsLeft />}
              onClick={() => paginate(1)}
            />
            <IconButton aria-label="" icon={<FiChevronLeft onClick={back} />} />

            <Text>Página atual: {pagAtual}</Text>

            <IconButton
              aria-label=""
              icon={<FiChevronRight />}
              onClick={advance}
            />
            <IconButton
              aria-label=""
              icon={<FiChevronsRight />}
              onClick={() => paginate(maxPage)}
            />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
