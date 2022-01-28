import {
  InputGroup,
  Input,
  InputProps,
  Text,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { IconBaseProps } from "react-icons";

interface InputComponentProps extends InputProps {
  placeholder: string;
  error: FieldError | null;
  icon: React.ComponentType<IconBaseProps>;
}

export function InputComponent({
  error,
  placeholder,
  icon,
  ...rest
}: InputComponentProps) {
  return (
    <InputGroup display="flex" flexDirection="column">
      <Input
        placeholder={placeholder}
        focusBorderColor="green.400"
        backgroundColor="green.800"
        color="green.100"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        height="45px"
        border="none"
        _placeholder={{ color: "green.100", fontWeight: "medium" }}
      />
      <InputRightElement>
        <Icon as={icon} color="green.100" height="24px" width="24px" />
      </InputRightElement>
      <Text color="red.400" fontSize="xs" paddingTop="5px" margin="0px">
        {error?.message}
      </Text>
    </InputGroup>
  );
}
