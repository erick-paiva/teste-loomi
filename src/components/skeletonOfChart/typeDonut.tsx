import {
  Box,
  Center,
  SkeletonCircle,
  SkeletonText,
  VStack,
  keyframes,
} from "@chakra-ui/react";

interface Props {
  height?: number | string;
  width?: number | string;
}

const TypeDonut = ({ height = 400, width = 500 }: Props) => {
  const donutAnimation = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
  `;

  return (
    <Center
      h={height + "px"}
      w={width + "px"}
      alignItems="center"
      justifyContent="space-between"
      paddingY={"40px"}
      paddingX={"40px"}
    >
      <VStack h="100%">
        <Box
          w="100%"
          h="20px"
          ml="30px"
          mb={{
            lg: "10px",
            xl: "20px",
            "2xl": "30px",
          }}
        >
          <SkeletonText noOfLines={1} />
        </Box>

        <Center
          h={{
            lg: "150px",
            xl: "200px",
            "2xl": "250px",
          }}
          w={{
            lg: "150px",
            xl: "200px",
            "2xl": "230px",
          }}
          bg="#D2D9E2"
          borderRadius="full"
          animation={`${donutAnimation} 0.9s ease-in-out infinite alternate`}
        >
          <Center
            h={{
              lg: "50px",
              xl: "100px",
              "2xl": "150px",
            }}
            w={{
              lg: "50px",
              xl: "100px",
              "2xl": "150px",
            }}
            bg="white"
            borderRadius="full"
          ></Center>
        </Center>
      </VStack>
      <VStack>
        <Center w="120px">
          <SkeletonCircle h="20px" w="20px" mr="10px" />
          <SkeletonText noOfLines={1} w="100px" />
        </Center>
        <Center w="120px">
          <SkeletonCircle h="20px" w="20px" mr="10px" />
          <SkeletonText noOfLines={1} w="100px" />
        </Center>
        <Center w="120px">
          <SkeletonCircle h="20px" w="20px" mr="10px" />
          <SkeletonText noOfLines={1} w="100px" />
        </Center>
      </VStack>
    </Center>
  );
};

export default TypeDonut;
