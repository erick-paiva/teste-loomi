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
  growth: number;
}

const SessionHome = () => {
  const mock: IConversionsResumeData = {
    title: "Sessão",
    warning: "",
    tagText: "0 %",
    text: "",
  };
  const getData = (
    endPoint: string,
    title: string,
    warning: string,
    callback?: (data: any) => void,
    type = "info"
  ) => {
    const response = api
      .get(endPoint)
      .then((res) => {
        const response = serializeData(title, warning, type, res.data);
        if (callback) callback(response);
      })
      .catch(() => {
        return mock;
      });
    return response;
  };

  const serializeData = (
    title: string,
    warning: string,
    type = "info",
    data: IResponseAlerts
  ) => {
    return {
      title: title,
      tagText:
        data.growth >= 0 ? `+ ${data.growth} %` : `- ${data.growth * -1} %`,
      warning: warning,
      text:
        type === "info"
          ? data.value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          : `${data.value} produtos`,
    };
  };

  const [tickeDay, setTickeDay] = useState(mock);
  const [tickeMonth, setTickeMonth] = useState(mock);
  const [alerts, setAlerts] = useState([
    mock,
    { ...mock, warning: "repor o quanto antes" },
  ]);
  const [ordersMonth, setOrdersMonth] = useState(mock);
  const [sellsMonth, setSellsMonth] = useState(mock);
  const [loading, setLoading] = useState(true);
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
    getData(
      "/avg-ticket-day",
      "Ticket médio últimas 24h",
      "em relação a ontem",
      setTickeDay
    );

    getData(
      "/avg-ticket-month",
      "Ticket médio mensal",
      "em relação a julho",
      setTickeMonth
    );

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

    getData(
      "/orders-month",
      "Pedidos realizados no mês",
      "em relação a julho",
      setOrdersMonth,
      "infoProd"
    );

    getData(
      "/sells-month",
      "Produtos vendidos no mês",
      "em relação a julho",
      setSellsMonth,
      "infoProd"
    );
  }, []);

  useEffect(() => {
    if (tickeDay && tickeMonth && alerts && ordersMonth && sellsMonth)
      setTimeout(() => {
        setLoading(false);
      }, 1000);
  }, [tickeDay, tickeMonth, alerts, ordersMonth, sellsMonth]);

  return (
    <HStack overflowX="auto" css={scrollBarStyle} spacing="32px" minH="200px">
      <StartCard information={tickeDay} loading={loading} />

      <StartCard information={tickeMonth} loading={loading} />
      {alerts.map((alert, index) => (
        <StartCard information={alert} key={index} loading={loading} />
      ))}

      <StartCard information={ordersMonth} loading={loading} />

      <StartCard information={sellsMonth} loading={loading} />
    </HStack>
  );
};

export default SessionHome;
