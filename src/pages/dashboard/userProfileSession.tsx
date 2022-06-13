import { Box, Heading, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { SessionsByGenre } from "./chartOptions/sessionsByGenre";
import { TransactionByCustomerType } from "./chartOptions/transactionByCustomerType";
import { TransactionByDevice } from "./chartOptions/transactionByDevice";
import { TransactionsByAge } from "./chartOptions/transactionsByAge";

interface IResponse {
  [key: string]: string[] | number[];
}

const UserProfileSession = () => {
  const [response, setResponse] = useState({} as IResponse);
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

  useEffect(() => {
    api.get("/users-resume").then(({ data }) => {
      setResponse(data);
    });
  }, []);

  return (
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
      <HStack overflowX="auto" css={scrollBarStyle} spacing="32px" minH="200px">
        <Box bg="white" borderRadius="12px">
          <TransactionsByAge data={response} />
        </Box>

        <Box bg="white" borderRadius="12px">
          <SessionsByGenre data={response} />
        </Box>
        <Box bg="white" borderRadius="12px">
          <TransactionByCustomerType data={response} />
        </Box>
        <Box bg="white" borderRadius="12px">
          <TransactionByDevice />
        </Box>
      </HStack>
    </Box>
  );
};

export default UserProfileSession;
