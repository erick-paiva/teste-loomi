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
  height?: number | string;
  width?: number | string;
}

const SkeletonOfChart = ({
  type = "bar",
  quantity = 7,
  horizontal = false,
  height = 400,
  width = 500,
}: Props) => {
  const col = generateArray(quantity);

  console.log(height);
  if (type === "donut") {
    return <TypeDonut height={height} width={width} />;
  }

  return (
    <Center
      h={height + "px"}
      w={width + "px"}
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
        h="100%"
        mt="20px"
        {...(horizontal && { justifyContent: "flex-start" })}
        {...(!horizontal && { alignItems: "flex-end" })}
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
                  h={generateRandomNumber(40, 90) + "px"}
                  w={{
                    lg: "10px",
                    xl: "15px",
                    "2xl": "20px",
                  }}
                  borderRadius="5px"
                ></Skeleton>
                <Skeleton
                  h="10px"
                  w={{
                    lg: "10px",
                    xl: "15px",
                    "2xl": "20px",
                  }}
                >
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
