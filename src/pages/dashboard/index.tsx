import { Box, Flex, Heading, HStack, keyframes } from "@chakra-ui/react";
import Header from "../../components/header";
import BackgroundImage from "../../assets/imagesPage/backgroundImage.svg";
import Sidebar from "../../components/sidebar";
import StartCard from "../../components/startCard";
import Chart from "../../components/charts";
import { profitExpectation } from "./chartOptions/profitExpectation";
import { orderPerMonth } from "./chartOptions/orderPerMonth";
import { braidsByAge } from "./chartOptions/braidsByAge";
import { ordersMade } from "./chartOptions/ordersMade";
import { categoriesOrders } from "./chartOptions/categoriesOrders";
import { sessionsByGenre } from "./chartOptions/sessionsByGenre";
import { transactionByCustomerType } from "./chartOptions/transactionByCustomerType";
import { transactionByDevice } from "./chartOptions/transactionByDevice";
import { useEffect, useState } from "react";
import ProductsTable from "./productsTable";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

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

  const data = [
    {
      title: "Ticket médio últimas 24h",
      tagText: "+ 15 %",
      warning: "em relação a ontem",
      text: "R$ 9.292,00",
    },
    {
      title: "Ticket médio mensal",
      tagText: "+ 15 %",
      warning: "em relação a julho",
      text: "R$ 129.292,00",
    },
    {
      title: "Produtos em manutenção",
      tagText: "há 5 dias",
      text: "8 produtos",
      type: "warning",
    },
    {
      title: "Produtos em manutenção",
      tagText: "há 5 dias",
      warning: "repor o quanto antes",
      text: "10 produtos",
      type: "warning",
    },
    {
      title: "Pedidos realizados no mês",
      tagText: "+ 15 %",
      warning: "em relação a julho",
      text: "10 pedidos",
    },
    {
      title: "Produtos vendidos no mês",
      tagText: "+ 15 %",
      warning: "em relação a julho",
      text: "23 pedidos",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

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
              <HStack
                overflowX="auto"
                css={scrollBarStyle}
                spacing="32px"
                minH="200px"
              >
                {data.map((item, i) => (
                  <Box key={item.title + i} minW="232px">
                    <StartCard information={item} />
                  </Box>
                ))}
              </HStack>
            </Box>
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
                Dashboard de vendas
              </Heading>
              <HStack
                overflowX="auto"
                css={scrollBarStyle}
                spacing="32px"
                minH="200px"
              >
                <Box bg="white" borderRadius="12px">
                  <Chart data={orderPerMonth()} />
                </Box>
                <Box bg="white" borderRadius="12px">
                  <Chart data={profitExpectation()} />
                </Box>
                <Box bg="white" borderRadius="12px">
                  <Chart data={ordersMade()} />
                </Box>
                <Box bg="white" borderRadius="12px">
                  <Chart
                    data={categoriesOrders()}
                    showSelect={false}
                    stylize={true}
                  />
                </Box>
              </HStack>
            </Box>
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
                {data.map((item, i) => (
                  <Box key={item.title + i + 1} minW="232px">
                    <StartCard information={item} />
                  </Box>
                ))}
              </HStack>
            </Box>

            <Box mb="40px" minW="80%" mr="40px" css={scrollBarStyle}>
              <Heading
                as="h3"
                color="purple.500"
                letterSpacing="0.48px"
                fontSize="24px"
                fontWeight="bold"
                mb="32px"
                ml="40px"
              >
                Perfil do usuário
              </Heading>
              <HStack
                overflowX="auto"
                css={scrollBarStyle}
                spacing="32px"
                minH="200px"
              >
                <Box bg="white" borderRadius="12px">
                  <Chart
                    data={braidsByAge()}
                    showSelect={false}
                    stylize={true}
                  />
                </Box>

                <Box bg="white" borderRadius="12px">
                  <Chart
                    data={sessionsByGenre()}
                    showSelect={false}
                    stylize={true}
                  />
                </Box>
                <Box bg="white" borderRadius="12px">
                  <Chart
                    data={transactionByCustomerType()}
                    showSelect={false}
                    stylize={true}
                  />
                </Box>
                <Box bg="white" borderRadius="12px">
                  <Chart
                    data={transactionByDevice()}
                    showSelect={false}
                    stylize={true}
                  />
                </Box>
              </HStack>
            </Box>
            <ProductsTable />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
