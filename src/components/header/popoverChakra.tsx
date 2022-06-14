import {
  Center,
  Heading,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { ImExit } from "react-icons/im";
import { useAuth } from "../../contexts/AuthContext";

interface Props {
  children: React.ReactNode;
}

const PopoverChakra = ({ children }: Props) => {
  const { signOut } = useAuth();

  return (
    <Popover isLazy>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent w="200px" mr="20px">
        <PopoverBody>
          <Center
            w="100%"
            justifyContent="space-between"
            h="50px"
            paddingX="10px"
            onClick={signOut}
          >
            <Heading as="h4" fontSize="17px">
              Sair da conta
            </Heading>

            <ImExit color="#df1545" size="20px" />
          </Center>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverChakra;
