import {
  Box,
  Center,
  Flex,
  HStack,
  Skeleton,
  SkeletonText,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { generateArray, generateRandomNumber } from "./helper";
import TypeDonut from "./typeDonut";

interface Props {
  type?: string;
  quantity?: number;
  horizontal?: boolean;
}

const SkeletonOfChart = ({
  type = "bar",
  quantity = 7,
  horizontal = false,
}: Props) => {
  const col = generateArray(quantity);

  if (type === "donut") {
    return <TypeDonut />;
  }

  return (
    <Center
      h="415px"
      w="500px"
      alignItems={horizontal ? "flex-start" : "center"}
      flexDirection="column"
      justifyContent="space-between"
      paddingY={"30px"}
    >
      <VStack w="100%" spacing="10px" alignItems="flex-start">
        <Box w="70%" h="20px" ml="30px">
          <SkeletonText noOfLines={1} />
        </Box>
        <HStack>
          {[0, 1, 2, 3].map((_, index: number) => (
            <Flex alignItems="center" key={index} ml="30px">
              <Skeleton h="20px" w="20px" mr="10px">
                <Box />
              </Skeleton>
              <Skeleton h="20px" w="50px" mr="10px">
                <Box />
              </Skeleton>
            </Flex>
          ))}
        </HStack>
      </VStack>
      <Center
        w="100%"
        mt="20px"
        {...(horizontal && { justifyContent: "flex-start" })}
      >
        <HStack
          spacing={4}
          alignItems="flex-end"
          h={horizontal ? "80%" : "100px"}
          w="50%"
          transform={horizontal ? "rotate(90deg)" : "rotate(0deg)"}
          justifyContent="center"
        >
          {col.map((_, index) => (
            <Flex key={index} flexDirection="column">
              <Stack>
                <Skeleton
                  h={generateRandomNumber(40, 70)}
                  w="20px"
                  borderRadius="5px"
                ></Skeleton>
                <Skeleton h="10px" w="20px">
                  <Box />
                </Skeleton>
              </Stack>
            </Flex>
          ))}
        </HStack>
      </Center>
    </Center>
  );
};

export default SkeletonOfChart;
