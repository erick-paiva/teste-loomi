import { Flex, HStack, Img, Td, Text, Tr } from "@chakra-ui/react";
import { HiCheck } from "react-icons/hi";
import TagChakra from "../tagChakra";

interface Props {
  img: string;
  description: string;
  name: string;
  status: string;
}

const CardProducts = ({ img, description, name, status }: Props) => {
  const dataTags = [
    {
      text: "banco",
    },
    {
      text: "sem braço",
    },
    {
      text: "sala de jantar",
    },
    {
      text: "madeira natual",
    },
  ];

  return (
    <Tr>
      <Td paddingY="30px" minW="400px" maxW="638px">
        <Flex alignItems="center">
          <Img h="80px" src={img} alt="description" />
          <Text
            ml="24px"
            letterSpacing="0.8px"
            color="black.400"
            opacity="1"
            fontFamily="Ubuntu"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            fontSize="20px"
          >
            {description}
          </Text>
        </Flex>
      </Td>
      <Td border="none"></Td>
      <Td
        color="black.400"
        fontSize="20px"
        fontFamily="Ubuntu"
        letterSpacing="0.8px"
        paddingY="30px"
        minW="500px"
      >
        {name}
      </Td>
      <Td paddingY="30px" minW="400px">
        <HStack
          spacing="7px"
          alignItems="flex-start"
          display="flex"
          maxW="300px"
          flexWrap="wrap"
        >
          {dataTags.map(({ text }) => (
            <TagChakra text={text} key={text} />
          ))}
        </HStack>
      </Td>
      <Td
        color="black.400"
        fontSize="20px"
        fontFamily="Ubuntu"
        letterSpacing="0.8px"
        paddingY="30px"
      >
        <Flex alignItems="center">
          <Text mr="10px">{status}</Text>
          <HiCheck size="30px" color="#5A4CA7" />
        </Flex>
      </Td>
    </Tr>
  );
};

export default CardProducts;
