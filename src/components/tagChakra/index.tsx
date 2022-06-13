import { Tag, TagLabel } from "@chakra-ui/react";

interface Props {
  text: string;
}

const TagChakra = ({ text }: Props) => {
  return (
    <Tag
      h="30px"
      minW="50px"
      borderRadius="full"
      bg="#D5D8DA"
      color="black.400"
      display="flex"
      justifyContent="center"
      fontSize="16px"
      letterSpacing="0.64px"
      mb="7px"
    >
      <TagLabel opacity="1">{text}</TagLabel>
    </Tag>
  );
};

export default TagChakra;
