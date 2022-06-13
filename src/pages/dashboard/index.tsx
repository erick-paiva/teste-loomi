import { Box, Flex, Heading, HStack, keyframes } from "@chakra-ui/react";
import Header from "../../components/header";
import BackgroundImage from "../../assets/imagesPage/backgroundImage.svg";
import Sidebar from "../../components/sidebar";
import ProductsTable from "./productsTable";
import SessionHome from "./sessionHome";
import FunnelSession from "./funnelSession";
import SalesDashboardSession from "./salesDashboardSession";
import UserProfileSession from "./userProfileSession";

const Dashboard = () => {
  const scrollBarStyle = {
    "&::-webkit-scrollbar": {
      width: "15px",
      height: "13px",
    },
    "&::-webkit-scrollbar-track": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#5A4CA7",
      borderRadius: "10px",
    },
  };

  const animation = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

  return (
    <Flex
      h="100vh"
      w="100vw"
      backgroundImage={BackgroundImage}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      bgColor="purple.50"
      flexDirection="column"
      animation={`${animation} 1s ease-in-out`}
      fontFamily="Ubuntu"
    >
      <Box>
        <Header userName="eduardo" />
      </Box>
      <Flex w="100%" overflowX="hidden" css={scrollBarStyle}>
        <Box minW="40px" mr="20px">
          <Sidebar />
        </Box>
        <Flex
          minH="70%"
          w="100%"
          as="section"
          alignItems="flex-start"
          overflowY="auto"
          css={scrollBarStyle}
        >
          <Box minW="70%" minH="70%" ml="20px" mb="108px">
            <Box margin="40px 40px 40px 0" minW="80%">
              <Heading
                as="h3"
                color="gray.600"
                letterSpacing="0.56px"
                fontSize="28px"
                fontWeight="bold"
                mb="32px"
                ml="40px"
              >
                Início
              </Heading>
              <SessionHome />
            </Box>
            <SalesDashboardSession />
            <Box mb="40px" minW="80%" mr="40px">
              <Heading
                as="h3"
                color="purple.500"
                letterSpacing="0.48px"
                fontSize="24px"
                fontWeight="bold"
                mb="32px"
                ml="40px"
              >
                Funil de conversão
              </Heading>
              <HStack
                overflowX="auto"
                css={scrollBarStyle}
                spacing="32px"
                minH="200px"
              >
                <FunnelSession />
              </HStack>
            </Box>

            <UserProfileSession />

            <ProductsTable />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
