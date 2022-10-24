import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

import { Button, Flex, IconButton } from "@chakra-ui/react";

import InputGenerico from "components/InputGenerico";

import { regexCaracteresEspeciais } from "utils/regex";

interface Props {
  registerForm: any;
}

function EditarAtividadeTabMOC({ registerForm }: Props) {
  const adicionarNovaMoc = () => {
    const mocs = registerForm.values.mocs;
    registerForm.setFieldValue("mocs", [
      ...mocs,
      {
        numero_moc: "",
      },
    ]);
  };

  const isDisabled = registerForm.values.mocs.some(
    (moc: any) => moc.numero_moc === ""
  );

  return (
    <Flex w={"100%"} direction={"column"} gap={4}>
      <Flex flex={1} justify={"space-between"} direction={"column"} gap={4}>
        {registerForm.values.mocs.map((_moc: any, index: number) => (
          <Flex gap={4} justify={"space-between"} align={"end"}>
            <Flex w={"50%"}>
              <InputGenerico
                registerForm={registerForm}
                nomeInput={"NÚMERO DA MOC"}
                propName={`mocs[${index}].numero_moc`}
                value={regexCaracteresEspeciais(
                  registerForm.values.mocs[index].numero_moc
                )}
                required={false}
                placeholder={"Número da MOC"}
                maxLength={100}
              />
            </Flex>
            <Button
              h={"56px"}
              borderRadius={"10px"}
              background={"white"}
              color={"origem.500"}
              _hover={{
                background: "origem.500",
                transition: "all 0.4s",
                color: "white",
              }}
              colorScheme="blue"
              variant="ghost"
              rightIcon={<BsFillCloudArrowUpFill size={24} />}
            >
              Anexar
            </Button>
          </Flex>
        ))}
      </Flex>
      <Flex
        w="100%"
        border={"2px"}
        borderStyle={"dashed"}
        borderRadius={"50px"}
        borderColor={"#D6D4D4"}
        align={"center"}
        justify={"center"}
        p={2}
        _hover={{
          borderColor: "#D6D4D4",
        }}
      >
        <IconButton
          onClick={() => adicionarNovaMoc()}
          icon={<FiPlus />}
          aria-label={"Plus sign icon"}
          isRound={true}
          color={"white"}
          backgroundColor={isDisabled ? "#D6D4D4" : "origem.500"}
          size={"sm"}
          _hover={{
            backgroundColor: isDisabled ? "#D6D4D4" : "origem.600",
          }}
          transition={"all 0.4s"}
          isDisabled={isDisabled}
        />
      </Flex>
    </Flex>
  );
}

export default EditarAtividadeTabMOC;
