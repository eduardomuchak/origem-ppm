import { Flex } from "@chakra-ui/react";

import { curveSData, tableData } from "./data";
import GenericCurveS from "./genericCurveS";
import { GenericTable } from "./genericTable";

export function PrevistoXRealizado() {
  return (
    <>
      <Flex direction={"column"} w={"100%"} gap={"2em"}>
        <GenericCurveS data={curveSData} />
        <GenericTable data={tableData} total={true} />
      </Flex>
    </>
  );
}
