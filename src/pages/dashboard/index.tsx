import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import Header from "../../components/header";
import BackgroundImage from "../../assets/imagesPage/backgroundImage.svg";
import Sidebar from "../../components/sidebar";
import StartCard from "../../components/startCard";
import ChartOrdersMonth from "../../components/charts";
import { braidsByAge, orderPerMonth } from "./chatsOptions";

const Dashboard = () => {
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
    >
      <Header userName="eduardo" />
      <Flex w="100%"
        overflowX="hidden"
      >
        <Sidebar />
        <Flex
          minH="70%"
          w="100%"
          as="section"
          alignItems="flex-start"
          overflowY="auto"
        >
          <Box minW="70%" minH="70%">
            <Box margin="40px 0 0 40px" minW="80%" mr="40px">
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
              <HStack overflowX="auto" spacing="32px" minH="200px">
                {data.map((item, i) => (
                  <Box key={item.title + i} minW="232px">
                    <StartCard information={item} />
                  </Box>
                ))}
              </HStack>
            </Box>
            <Box margin="40px 0 0 40px" minW="80%" mr="40px">
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
              <HStack overflowX="auto" spacing="32px" minH="200px">
                <Box bg="white" borderRadius="12px">
                  <ChartOrdersMonth
                    data={orderPerMonth}
                  />
                </Box>
              </HStack>
            </Box>
            <Box margin="40px 0 0 40px" minW="80%" mr="40px">
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
              <HStack overflowX="auto" spacing="32px" minH="200px">
                {data.map((item, i) => (
                  <Box key={item.title + i + 1} minW="232px">
                    <StartCard information={item} />
                  </Box>
                ))}
              </HStack>
            </Box>

            <Box margin="40px 0 0 40px" minW="80%" mr="40px">
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
              <HStack overflowX="auto" spacing="32px" minH="200px">
                <Box bg="white" borderRadius="12px">
                  <ChartOrdersMonth
                    data={braidsByAge}
                    showSelect={false}
                  />
                </Box>

                <Box bg="white" borderRadius="12px">
                  <ChartOrdersMonth
                    data={braidsByAge}
                    showSelect={false}
                  />
                </Box>
              </HStack>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
