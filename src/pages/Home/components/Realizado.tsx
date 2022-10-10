import { useEffect, useState } from "react";

import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { TotalOrcamento, TotalRealizado } from "interfaces/Services";

import { getOrcamentoTotal, getTotalRealizado } from "services/get/Dashboard";

export default function RealizadoComponent() {
  const [totalRealizado, setTotalRealizado] = useState<TotalRealizado[]>(
    [] as TotalRealizado[]
  );
  const [orcamento, setTotalOrcamento] = useState<TotalOrcamento[]>();
  const [loading, setLoading] = useState(false);

  async function handleGetTotalRealizado() {
    setLoading(true);
    const reqGet = await getTotalRealizado();

    setTotalRealizado(reqGet.data[0].totalRealizado);
    setLoading(false);
  }

  async function handleGetTotalOrcamento() {
    const reqGet = await getOrcamentoTotal();

    setTotalOrcamento(reqGet.data[0].total);
  }

  useEffect(() => {
    handleGetTotalOrcamento();
    handleGetTotalRealizado();
    setLoading(false);
  }, []);

  const valorFormatado = totalRealizado && totalRealizado.toLocaleString();

  return (
    <Flex
      py={"4"}
      px={"4"}
      w={"100%"}
      bg={"white"}
      boxShadow={useColorModeValue("md", "md-dark")}
      borderRadius={"xl"}
      flex={1}
      align={"center"}
      justify={"center"}
    >
      <Box
        w={"100%"}
        sx={{ display: "flex" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text
            mb={1}
            sx={{ fontSize: 16, fontWeight: "600", alignSelf: "center" }}
            color="#000000"
          >
            Realizado
          </Text>
          <Box sx={{ display: "flex" }}>
            <Text
              sx={{ fontSize: 12, fontWeight: "600", alignSelf: "center" }}
              color="#000000"
            >
              R$
            </Text>
            <Text
              ml={2}
              sx={{ fontSize: 18, fontWeight: "600", alignSelf: "center" }}
              color="#000000"
            >
              {!loading && valorFormatado}
            </Text>
          </Box>
        </Box>
        <Box
          justifyContent="center"
          alignItems="center"
          bg={"#2E69FD"}
          sx={{ height: "100%", alignItems: "center", borderRadius: "2px" }}
        >
          <Text
            p={1}
            sx={{ fontSize: 22, fontWeight: "600", alignSelf: "center" }}
            color="#ffffff"
          >
            {(Number(totalRealizado) / Number(orcamento)) * 100}%
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
