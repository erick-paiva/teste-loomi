import {
  Box,
  Center,
  HStack,
  Skeleton,
  SkeletonText,
  Stack,
  Td,
  Tr,
} from "@chakra-ui/react";
import { generateArray } from "./helper";

interface Props {
  quantity?: number;
}

const SkeletonCardProducts = ({ quantity = 7 }: Props) => {
  const cards = generateArray(quantity);
  return (
    <>
      {cards.map((_, index: number) => (
        <Tr key={index}>
          <Td paddingY="30px">
            <Center>
              <Box w="10%" mr="20px">
                <Skeleton borderRadius="5px">
                  <Box h="50px" w="40px" />
                </Skeleton>
              </Box>
              <Box w="85%">
                <SkeletonText mt="4" noOfLines={2} spacing="4" />
              </Box>
            </Center>
          </Td>
          <Td border="none"></Td>
          <Td paddingY="30px">
            <Stack>
              <SkeletonText mt="4" noOfLines={2} spacing="4" />
            </Stack>
          </Td>
          <Td paddingY="30px">
            <Center>
              <HStack w="100%" mr="20px" spacing="10px">
                <Skeleton borderRadius="18px" w="78px" h="30px">
                  <Box />
                </Skeleton>
                <Skeleton borderRadius="18px" w="78px" h="30px">
                  <Box />
                </Skeleton>
                <Skeleton borderRadius="18px" w="78px" h="30px">
                  <Box />
                </Skeleton>
              </HStack>
            </Center>
          </Td>
          <Td paddingY="30px">
            <Stack>
              <SkeletonText mt="4" noOfLines={2} spacing="4" />
            </Stack>
          </Td>
        </Tr>
      ))}
    </>
  );
};

export default SkeletonCardProducts;
