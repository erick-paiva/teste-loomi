import { Box, Heading, HStack } from "@chakra-ui/react";
import { CategoriesOrders } from "./chartOptions/categoriesOrders";
import { OrderPerMonth } from "./chartOptions/orderPerMonth";
import { OrdersMade } from "./chartOptions/ordersMade";
import { ProfitExpectation } from "./chartOptions/profitExpectation";

const SalesDashboardSession = () => {
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
  return (
    <Box mb="40px" minW="80%" mr="40px" as="section">
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
      <HStack overflowX="auto" css={scrollBarStyle} spacing="32px" minH="200px">
        <Box bg="white" borderRadius="12px">
          <OrderPerMonth endpoint="/sells-per-month" />
        </Box>
        <Box bg="white" borderRadius="12px">
          <ProfitExpectation
            endpoints={["/profit-expectation-per-month", "/profit-per-month"]}
          />
        </Box>
        <Box bg="white" borderRadius="12px">
          <OrdersMade endpoints={["/orders-per-month", "/canceled-orders-per-month"]} />
        </Box>
        <Box bg="white" borderRadius="12px">
          <CategoriesOrders />
        </Box>
      </HStack>
    </Box>
  );
};

export default SalesDashboardSession;
