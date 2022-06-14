import { Box, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import StartCard from "../../components/startCard";
import { api } from "../../services/api";

interface IInfoData {
  title: string;
  warning: string;
  tagText: string;
  text: string;
  type?: string;
}

interface IResponseData {
  value: number;
  growth: number;
}

interface IMockData {
  [key: string]: IInfoData;
}

const FunnelSession = () => {
  const [loading, setLoading] = useState(true);
  const serializeDate = (
    title: string,
    warning: string,
    growth: number | string,
    value: number | string,
    type = "info"
  ) => {
    const newData = {
      title: title,
      tagText: growth >= 0 ? `+ ${growth} %` : `- ${+growth * -1} %`,
      warning: warning,
      text:
        type === "info"
          ? value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          : `${value} produtos`,
    };
    return newData;
  };

  const [mockData, setMockData] = useState({
    "total-per-day": {
      title: "Sessões",
      warning: "em relação a ontem",
      tagText: "0 %",
      text: "0 visualizações",
    },
    "products-view-per-month": {
      title: "Visualizções de Produto",
      warning: "em relação a julho",
      tagText: "0 %",
      text: "0 visualizações",
    },
    "product-page-conversion-per-month": {
      title: "Conversão para a página de produtos",
      warning: "em relação a julho",
      tagText: "0 %",
      text: "0 %",
    },

    "add-to-cart-per-month": {
      title: "Adições ao carrinho",
      warning: "em relação a julho",
      tagText: "0 %",
      text: "0 produtos",
    },
    "checkout-email-per-month": {
      title: "Checkout - Email",
      warning: "em relação a julho",
      tagText: "0 %",
      text: "0 usuários",
    },
    "checkout-registration-per-month": {
      title: "Checkout - Cadastro",
      warning: "em relação a julho",
      tagText: "0 %",
      text: "0 usuários",
    },
    "checkout-shipping-per-month": {
      title: "Checkout - Frete",
      warning: "em relação a julho",
      tagText: "0 %",
      text: "0 produtos",
    },
  } as IMockData);

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
    api.get("/conversions-resume").then((data) => {
      const dataKey = Object.keys(data.data);
      const dataValues: IResponseData[] = Object.values(data.data);
      const newData = dataKey.map((key: string, index: number) => {
        const extension = mockData[key]?.text.split(" ")[1];
        return serializeDate(
          mockData[key].title,
          mockData[key].warning,
          dataValues[index].growth,
          `${dataValues[index].value} ${extension}`
        );
      });
      setMockData(newData as IMockData | any);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  return (
    <HStack overflowX="auto" css={scrollBarStyle} spacing="32px" minH="200px">
      {Object.values(mockData).map((data, index) => (
        <Box minW="230px" key={index}>
          <StartCard information={data} loading={loading} />
        </Box>
      ))}
    </HStack>
  );
};

export default FunnelSession;
