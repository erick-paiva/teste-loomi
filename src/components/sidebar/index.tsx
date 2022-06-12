import { Center, Img, Text, VStack, keyframes } from "@chakra-ui/react";
import { options } from "./sideBarOptions";
import Menu from "../../assets/sidebarImages/menu.svg";
import { useState } from "react";
import Home from "../../assets/sidebarImages/home.svg";
import IconSidebar from "./iconSidebar";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const animation = keyframes`
  from {opacity: 0; transform: translateX(-30px); z-index: -1;}
  to {opacity: 1;}
`;

  return (
    <Center
      bg="white"
      margin="16px"
      minH="90%"
      w={open ? "276px" : "88px"}
      {...(open && { marginRight: "40px" })}
      flexDirection="column"
      boxShadow="0px 3px 6px #00000029;"
      opacity={1}
      borderRadius="8px"
      justifyContent="flex-start"
      transition="all 0.3s ease-in-out"
    >
      <Center
        as="figure"
        borderBottom="1px solid #E0E0E0"
        w="100%"
        h="80px"
        mb="30px"
        cursor="pointer"
        onClick={handleClick}
        {...(open && { justifyContent: "flex-start" })}
      >
        {open ? (
          <Center ml="30px" animation={`${animation} 0.4s ease-in-out`}>
            <HiOutlineArrowLeft size="25px" />
            <Text
              ml="33px"
              fontSize="22px"
              color="gray.600"
              letterSpacing="0.44px"
            >
              Fechar
            </Text>
          </Center>
        ) : (
          <Img src={Menu} alt="home" />
        )}
      </Center>

      <VStack
        spacing="25px"
        alignItems={open ? "flex-start" : "center"}
        w="100%"
      >
        <Center
          as="figure"
          h="40px"
          w={open ? "228px" : "40px"}
          bg={open ? "orange.300" : "purple.500"}
          borderRadius="6px"
          opacity={1}
          cursor="pointer"
          justifyContent={open ? "flex-start" : "center"}
          ml={open ? "24px" : "0"}
          transition="all 0.3s ease-in-out"
        >
          <Img src={Home} alt="home" />

          {open && (
            <Text
              letterSpacing="0.44px"
              fontSize="22px"
              ml="24px"
              color="white"
            >
              Início
            </Text>
          )}
        </Center>
        {options.map((option) => (
          <IconSidebar
            showToolTip={!open}
            show={open}
            key={option.name}
            data={option}
          />
        ))}
      </VStack>
    </Center>
  );
};

export default Sidebar;
