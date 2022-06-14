import { Tag, TagLabel } from "@chakra-ui/react";

interface Props {
  text: string;
}

const TagChakra = ({ text }: Props) => {
  return (
    <Tag
      minW="50px"
      borderRadius="full"
      bg="#D5D8DA"
      color="black.400"
      display="flex"
      justifyContent="center"
      fontSize={{
        lg: "10px",
        xl: "12px",
        "2xl": "16px",
      }}
      letterSpacing="0.64px"
      mb="7px"
      h={{
        lg: "15px",
        xl: "20px",
        "2xl": "30px",
      }}
    >
      <TagLabel opacity="1">{text}</TagLabel>
    </Tag>
  );
};

export default TagChakra;
