import { FieldError } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  useState,
  useCallback,
  useEffect,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  Icon?: JSX.Element;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "red.500",
  default: "gray.200",
  focus: "gray.600",
  filled: "green.200",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, Icon, error = null, ...rest },
  ref
) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error} fontFamily="Ubuntu">
      {!!label && (
        <FormLabel color="black.400" fontSize="18px" ml="18px">
          {label}
        </FormLabel>
      )}

      <InputGroup>
        <ChakraInput
          id={name}
          name={name}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          onBlurCapture={handleInputBlur}
          onFocus={handleInputFocus}
          color={inputVariation[variation]}
          bg="gray.50"
          variant="outline"
          _hover={{ bgColor: "gray.100" }}
          _placeholder={{ color: "gray.600" }}
          _focus={{
            bg: "gray.100",
          }}
          fontSize="20px"
          h="60px"
          borderRadius="8px"
          ref={ref}
          {...rest}
        />
        {Icon && (
          <InputRightElement
            color={inputVariation[variation]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            h="60px"
            mr="12px"
          >
            {Icon}
          </InputRightElement>
        )}

        {!!error && (
          <FormErrorMessage color="red.500">{error.message}</FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const InputChakra = forwardRef(InputBase);
