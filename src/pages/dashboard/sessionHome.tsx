import { HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import StartCard from "../../components/startCard";
import { api } from "../../services/api";

interface IConversionsResumeData {
  title: string;
  warning: string;
  tagText: string;
  text: string;
  type?: string;
}

interface IResponseAlerts {
  type: string;
  value: number;
  since: string;
}

const SessionHome = () => {
  const mock: IConversionsResumeData = {
    title: "Sessão",
    warning: "",
    tagText: "0 %",
    text: "",
  };
  const getData = async (
    endPoint: string,
    title: string,
    warning: string,
    type = "info"
  ) => {
    const response = await api
      .get(endPoint)
      .then((res) => {
        return {
          title: title,
          tagText:
            res.data.growth >= 0
              ? `+ ${res.data.growth} %`
              : `- ${res.data.growth * -1} %`,
          warning: warning,
          text:
            type == "info"
              ? res.data.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              : `${res.data.value} produtos`,
        };
      })
      .catch(() => {
        return mock;
      });
    return response;
  };

  const [tickeDay, setTickeDay] = useState(mock);
  const [tickeMonth, setTickeMonth] = useState(mock);
  const [alerts, setAlerts] = useState([
    mock,
    { ...mock, warning: "repor o quanto antes" },
  ]);
  const [ordersMonth, setOrdersMonth] = useState(mock);
  const [sellsMonth, setSellsMonth] = useState(mock);

  const scavengePastDays = (date: string) => {
    const pastDate = new Date(date);
    const pastDays = new Date().getTime() - pastDate.getTime();
    return new Date(pastDays).getDate();
  };

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
    (async () => {
      setTickeDay(
        await getData(
          "/avg-ticket-day",
          "Ticket médio últimas 24h",
          "em relação a ontem"
        )
      );
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setTickeDay(
        await getData(
          "/avg-ticket-day",
          "Ticket médio últimas 24h",
          "em relação a ontem"
        )
      );
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setTickeMonth(
        await getData(
          "/avg-ticket-month",
          "Ticket médio mensal",
          "em relação a julho"
        )
      );
    })();
  }, []);

  useEffect(() => {
    (async () => {
      api.get("/alerts").then((res) => {
        setAlerts(
          res.data.map((ele: IResponseAlerts, index: number) => {
            return {
              title: ele.type,
              warning: alerts[index].warning,
              tagText: `há ${scavengePastDays(ele.since)} dias`,
              text: `${ele.value} produtos`,
              type: "info",
            };
          })
        );
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setOrdersMonth(
        await getData(
          "/orders-month",
          "Pedidos realizados no mês",
          "em relação a julho",
          "infoProd"
        )
      );
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setSellsMonth(
        await getData(
          "/sells-month",
          "Produtos vendidos no mês",
          "em relação a julho",
          "infoProd"
        )
      );
    })();
  }, []);

  return (
    <HStack overflowX="auto" css={scrollBarStyle} spacing="32px" minH="200px">
      <StartCard information={tickeDay} />

      <StartCard information={tickeMonth} />
      {alerts.map((alert, index) => (
        <StartCard information={alert} key={index} />
      ))}

      <StartCard information={ordersMonth} />

      <StartCard information={sellsMonth} />
    </HStack>
  );
};

export default SessionHome;
