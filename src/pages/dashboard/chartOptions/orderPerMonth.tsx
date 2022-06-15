import { useEffect, useState } from "react";
import Charts from "../../../components/charts";
import { api } from "../../../services/api";

interface Props {
  endpoint: string;
}

interface IResponse {
  month: number;
  value: number;
}

export const OrderPerMonth = ({ endpoint }: Props) => {
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState([
    {
      name: "pedidos",
      data: [31, 40, 28, 51, 42, 93, 50, 70, 60, 82],
    },
  ]);

  useEffect(() => {
    api.get(endpoint).then(({ data }) => {
      const values: IResponse[] = Object.values(data);
      setSeries([
        {
          name: "pedidos",
          data: values.map((item) => item.value),
        },
      ]);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  const options = {
    type: "bar",
    height: "400px",
    width: "608px",
    options: {
      dataLabels: {
        enabled: false,
      },
      colors: ["#393c56"],
      title: {
        text: "Pedidos por mês",
        offsetX: 24,
        offsetY: 25,
        align: "left",
        marginLeft: 50,
        style: {
          fontSize: "18px",
          fontFamily: "Ubuntu",
          color: "#333333",
          opacity: 1,
        },
      },
      grid: {
        show: false,
      },
      chart: {
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          left: 1,
          color: "#00000026",
          opacity: 1,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          borderRadius: 3,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: "#ededee",
          width: "1px",
        },
      },
      xaxis: {
        labels: {
          style: {
            colors: "#4D4141",
            fontSize: "12px",
            fontFamily: "Ubuntu",
            fontWeight: "bold",
            letterSpacing: "0.48px",
          },
        },
        axisBorder: {
          show: true,
          color: "#ededee",
          height: "1px",
          width: "100%",
        },
        categories: [
          "JAN",
          "FEV",
          "MAR",
          "ABR",
          "MAI",
          "JUN",
          "JUL",
          "AGO",
          "SET",
          "OUT",
          "NOV",
          "DEZ",
        ],
      },
    },
    series: series,
  };

  return <Charts data={options} loading={loading} />;
};
