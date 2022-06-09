import { Center, Flex, Tag, TagLabel, Text } from "@chakra-ui/react";
interface IStartCardProps {
  information: {
    title: string;
    warning?: string;
    tagText: string;
    text: string;
    type?: string;
  };
}

const StartCard = ({ information }: IStartCardProps) => {
  const { title, warning, tagText, text, type = "information" } = information;
  const textSplit = text.split(" ");

  const regex = /[0-9]/;
  const regexLetter = /[a-z]/;
  const isNumber = regex.test(textSplit[0]) && regexLetter.test(textSplit[1]);

  return (
    <Center
      h="168px"
      w="232px"
      bg="white"
      borderRadius="15px"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Flex
        h="100%"
        justifyContent="space-between"
        ml="15px"
        flexDirection="column"
        alignItems="flex-start"
        paddingY="15px"
      >
        <Flex flexDirection="column" alignItems="flex-start">
          <Text mb="12px" fontSize="16px" color="gray.600" fontWeight="bold">
            {title}
          </Text>

          <Tag
            display="flex"
            alignItems="center"
            justifyContent="center"
            minW="55px"
            maxW="100px"
            h="23px"
            color={type === "information" ? "green.200" : "red.100"}
            fontSize="12px"
            boxShadow="0px 0px 20px #0000001A;"
            size="20px"
            variant="outline"
            colorScheme="white"
            fontWeight="bold"
            paddingX="10px"
            borderRadius="12px"
          >
            <TagLabel>{tagText}</TagLabel>
          </Tag>
        </Flex>
        {warning && (
          <Text
            mt="10px"
            fontSize="14px"
            color={type === "information" ? "green.200" : "red.100"}
            fontWeight="bold"
          >
            {warning}
          </Text>
        )}
        {!isNumber ? (
          <Text
            mt="18px"
            fontSize="20px"
            color="gray.600"
            fontWeight="bold"
            display="flex"
            alignItems="center"
          >
            <Text mr="12px" fontWeight="normal" fontSize="16px" as="span">
              {textSplit[0]}
            </Text>
            {textSplit[1]}
          </Text>
        ) : (
          <Text
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="16px"
            mt="18px"
            color="gray.600"
          >
            <Text mr="12px" as="span" fontSize="20px" fontWeight="bold">
              {textSplit[0]}
            </Text>
            {textSplit[1]}
          </Text>
        )}
      </Flex>
    </Center>
  );
};

export default StartCard;