import { Flex, Textarea, Text } from "@chakra-ui/react";

import { RequiredField } from "components/RequiredField/RequiredField";
import { TextError } from "components/TextError";

interface Props {
  registerForm: any;
  nomeInput: any;
  propName: any;
  value: any;
  required?: any;
  placeholder?: any;
  minHeight?: string;
  maxLength?: number;
}

function TextAreaGenerico({
  registerForm,
  nomeInput,
  propName,
  value,
  required,
  placeholder,
  minHeight,
  maxLength,
}: Props) {
  return (
    <Flex direction={"column"} w={"100%"} flex={1}>
      <Flex gap={1}>
        {required && <RequiredField />}
        <Text fontWeight={"bold"} fontSize={"12px"} color={"#949494"}>
          {nomeInput}
        </Text>
      </Flex>
      <Textarea
        placeholder={placeholder}
        id={propName}
        name={propName}
        value={value}
        maxLength={255}
        onChange={registerForm.handleChange}
        w={"100%"}
        _placeholder={{ color: "#949494" }}
        fontSize={"14px"}
        fontWeight={"400"}
        minH={minHeight}
      />
      {registerForm.touched[propName] && registerForm.errors[propName] && (
        <TextError>{registerForm.errors[propName]}</TextError>
      )}
    </Flex>
  );
}

export default TextAreaGenerico;
