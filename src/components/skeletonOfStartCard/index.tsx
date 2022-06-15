import { Box, Center, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonOfStartCard = () => {
  return (
    <Center
      h="168px"
      minW="232px"
      bg="white"
      borderRadius="15px"
      flexDirection="column"
      alignItems="flex-start"
      paddingY="15px"
      paddingX="15px"
    >
      <Box h="10px" w="90%" mb="10px">
        <SkeletonText noOfLines={1} />
      </Box>
      <Box w="80%" mb="20px">
        <Skeleton h="10px" w="20px" mb="10px">
          <Box />
        </Skeleton>
        <SkeletonText noOfLines={2} />
      </Box>
      <Skeleton h="20px" w="80%">
        <Box />
      </Skeleton>
    </Center>
  );
};

export default SkeletonOfStartCard;
