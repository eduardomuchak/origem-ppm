import { useEffect, useState } from "react";

import {
  FormControl,
  FormLabel,
  Select,
  // useBreakpointValue,
} from "@chakra-ui/react";
import { Prioridade } from "interfaces/Services";

import { TextError } from "components/TextError";

import { getPrioridade } from "services/get/Projetos";

function FormPrioridade(projectsForm: any) {
  const [prioridadeState, setPrioridadeState] = useState<Prioridade[]>(
    [] as Prioridade[]
  );

  async function handleGetProjetos() {
    const reqGet = await getPrioridade();

    const dataReq: Prioridade[] = reqGet.data.sort(
      (a: Prioridade, b: Prioridade) => a.prioridade.localeCompare(b.prioridade)
    );

    setPrioridadeState(dataReq);
  }

  useEffect(() => {
    handleGetProjetos();
  }, []);

  return (
    <FormControl>
      <FormLabel
        fontSize={"12px"}
        fontWeight={"700"}
        color={"#949494"}
        htmlFor="prioridadeId"
      >
        PRIORIDADE
      </FormLabel>
      <Select
        id="prioridadeId"
        name="prioridadeId"
        value={projectsForm.projectsForm.values.prioridadeId}
        onChange={projectsForm.projectsForm.handleChange}
        mt={"-9px"}
        h={"56px"}
        w={"100%"}
        fontSize={"14px"}
        fontWeight={"400"}
        placeholder="Selecione"
      >
        {prioridadeState.map((prioridade) => (
          <option key={prioridade.id} value={prioridade.id}>
            {prioridade.prioridade}
          </option>
        ))}
      </Select>
      {projectsForm.projectsForm.errors.prioridadeId &&
        projectsForm.projectsForm.touched.prioridadeId && (
          <TextError>{projectsForm.projectsForm.errors.prioridadeId}</TextError>
        )}
    </FormControl>
  );
}

export default FormPrioridade;
