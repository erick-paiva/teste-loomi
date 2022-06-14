import {
  Box,
  Center,
  SkeletonCircle,
  SkeletonText,
  VStack,
  keyframes,
} from "@chakra-ui/react";

const TypeDonut = () => {
  const donutAnimation = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
  `;

  return (
    <Center
      h="415px"
      w="500px"
      alignItems="center"
      justifyContent="space-between"
      paddingY={"40px"}
      paddingX={"40px"}
    >
      <VStack h="100%">
        <Box w="100%" h="20px" ml="30px" mb="50px">
          <SkeletonText noOfLines={1} />
        </Box>

        <Center
          h="250px"
          w="250px"
          bg="#D2D9E2"
          borderRadius="full"
          animation={`${donutAnimation} 0.9s ease-in-out infinite alternate`}
        >
          <Center h="150px" w="150px" bg="white" borderRadius="full"></Center>
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
