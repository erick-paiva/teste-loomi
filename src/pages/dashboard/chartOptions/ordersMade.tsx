import { useEffect, useState } from "react";
import Charts from "../../../components/charts";
import { api } from "../../../services/api";

interface Props {
  endpoints: string[];
}
interface IResponse {
  month: number;
  value: number;
}
interface ISeries {
  name: string;
  data: number[];
}

export const OrdersMade = ({ endpoints }: Props) => {
  const mockSeries = [
    {
      name: "Pedidos realizados",
      data: [500, 650, 400, 700, 780, 730, 400, 550, 465, 545, 565, 575],
    },
    {
      name: "Pedidos cancelados",
      data: [50, 70, 600, 450, 730, 900, 900, 1100, 500, 490, 354, 670],
    },
  ];

  const [series, setSeries] = useState(mockSeries);
  const [seriesResponse, setSeriesReposnse] = useState<ISeries[]>([]);

  useEffect(() => {
    api.get(endpoints[0]).then(({ data }) => {
      const values: IResponse[] = Object.values(data);
      const newSeries: ISeries[] = [
        {
          name: "Pedidos realizados",
          data: values.map((item) => item.value),
        },
      ];

      api.get(endpoints[1]).then(({ data }) => {
        const values: IResponse[] = Object.values(data);
        const newSerie = values.map((item) => item.value);
        setSeriesReposnse([
          ...newSeries,
          {
            name: "Pedidos cancelados",
            data: newSerie,
          },
        ]);
      });
    });
  }, []);

  useEffect(() => {
    setSeries(seriesResponse);
  }, [seriesResponse]);

  const options = {
    type: "bar",
    height: "400px",
    width: "608px",
    options: {
      chart: {
        type: "bar",
        width: "100%",
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          left: 1,
          color: "#00000026",
          opacity: 1,
        },
        stacked: false,
      },
      colors: ["#109E8E", "#F18F7F"],
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          columnWidth: "70%",
          borderRadius: [3, 3, 0, 0],
          rangeBarOverlap: true,
        },
      },
      stroke: {
        width: [1, 1],
      },
      title: {
        text: `Pedidos realizados x \n pedidos cancelados`,
        offsetX: 24,
        offsetY: 7,
        margin: 50,
        align: "left",
        marginLeft: 50,
        style: {
          fontSize: "18px",
          fontFamily: "Ubuntu",
          color: "#333333",
          opacity: 1,
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
        labels: {
          style: {
            colors: ["#4D4141"],
            fontSize: "12px",
            fontWeight: "bold",
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "16px",
        },
      },
      legend: {
        show: true,
        markers: {
          shape: "square",
          showNullDataPoints: true,
          radius: 2,
        },
        position: "top",
        horizontalAlign: "left",
        offsetX: 0,
        labels: {
          colors: "#252E48",
        },
        fontSize: "14px",
        fontFamily: "Ubuntu",
      },
    },
    series: series,
  };

  return <Charts data={options} />;
};
