import { Avatar, Flex, Img, Text } from "@chakra-ui/react";
import LogoLoomi from "../../assets/imagesPage/logoLoomi.svg";

interface HeaderProps {
  userName: string;
  userAvatar?: string;
}

export const Header = ({ userName, userAvatar }: HeaderProps) => {
  return (
    <Flex
      as="header"
      boxShadow="0px 3px 6px #00000014"
      bg="white"
      w="100%"
      h="84px"
      alignItems="center"
      justifyContent="space-between"
      paddingX="40px"
      fontFamily="Ubuntu"
    >
      <Img src={LogoLoomi} alt="logoLoomi" h="60px" />

      <Flex alignItems="center">
        <Text textTransform="capitalize">{userName}</Text>
        <Avatar
          ml="10px"
          textTransform="uppercase"
          name={userName}
          {...(userAvatar && { src: userAvatar })}
          bg="purple.500"
          color="gray.600 opacity:1"
          fontSize={["22px", "26px"]}
          opacity="0.55"
        />
      </Flex>
    </Flex>
  );
};

export default Header;
