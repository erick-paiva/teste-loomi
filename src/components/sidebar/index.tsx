import {
  Center,
  Img,
  Text,
  VStack,
  keyframes,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";
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

  const [isLargerThan1000] = useMediaQuery(
    "(max-width: 1440px)"
  );

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
              color="gray.600"
              letterSpacing="0.44px"
              fontSize={isLargerThan1000 ? "15px" : "22px"}
            >
              Fechar
            </Text>
          </Center>
        ) : (
          <Img
            src={Menu}
            alt="home"
            {...(isLargerThan1000 && { height: "30px" })}
          />
        )}
      </Center>

      <VStack
        spacing={isLargerThan1000 ? "12px" : "24px"}
        alignItems={open ? "flex-start" : "center"}
        w="100%"
      >
        <Tooltip
          hasArrow
          display={!open ? "flex" : "none"}
          label={"Inicio"}
          placement="right-start"
          color="gray.600"
          marginTop="5px"
          bg="gray.200"
          ml="30px"
          h="33px"
          minW="80px"
          letterSpacing="0.32px"
          alignItems="center"
          justifyContent="center"
          opacity={1}
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
            <Img
              src={Home}
              alt="home"
              {...(isLargerThan1000 && { height: "30px" })}
            />

            {open && (
              <Text
                letterSpacing="0.44px"
                fontSize={isLargerThan1000 ? "15px" : "22px"}
                ml="24px"
                color="white"
              >
                Início
              </Text>
            )}
          </Center>
        </Tooltip>
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
