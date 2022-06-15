import { Button, Flex, Text } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  currentPage: number;
  totalPages?: number;
  advance: () => void;
  back: () => void;
}

const Paginate = ({ currentPage, totalPages = 1, advance, back }: Props) => {
  return (
    <Flex alignItems="center" color="black.400">
      <Text fontSize="16px" letterSpacing="0.32px" opacity="0.4">
        {currentPage} de {totalPages}
      </Text>

      <Button marginX="16px" bg="#f8f8f8" onClick={back}>
        <IoIosArrowBack size="30px" color="black" opacity="1" />
      </Button>
      <Button bg="#f8f8f8" onClick={advance}>
        <IoIosArrowForward size="30px" color="black" />
      </Button>
    </Flex>
  );
};

export default Paginate;
