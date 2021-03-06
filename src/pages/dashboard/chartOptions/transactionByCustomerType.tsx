import { useEffect, useState } from "react";
import Charts from "../../../components/charts";
import "./chartStyles/transactionByCustomerType.styles.css";

interface IDonutChartProps {
  series: string[];
  seriesIndex: number;
  dataPointIndex: number;
  w: object | any;
}

interface Props {
  data: {
    [key: string]: number[] | any;
  };
  loading?: boolean;
}

interface IResponse {
  category: string;
  value: number;
}

export const TransactionByCustomerType = ({ data, loading }: Props) => {
  const mockSeries = [2861, 2345];

  const [series, setSeries] = useState(mockSeries);

  useEffect(() => {
    try {
      const values: IResponse[] = Object.values(
        data["transactions-per-client-type"]
      );
      setSeries(values.map((item) => item.value));
    } catch (error) {
      setSeries(mockSeries);
    }
  }, [data]);

  const customTooltip = ({ seriesIndex, w }: IDonutChartProps) => {
    const series = w.config.series;
    let transaction: number | string =
      +series[seriesIndex] >= 1000
        ? (+series[seriesIndex] / 1000).toFixed(3)
        : series[seriesIndex];

    const total = series.reduce((acc: number, curr: number) => {
      return acc + curr;
    }, 0);

    const percent: number | string = (
      (+series[seriesIndex] / total) *
      100
    ).toFixed(2);

    return `
    <div id="container-customer">
      <span id="arrow-customer"></span>
      <div class="arrow_box-container">
        <div class="arrow_box-info">
          ${percent}
          <span class="text">
            %
          </span>
        </div>
        <div class="arrow_box-info">
          ${transaction}
          <span class="text">
            transações
          </span>
        </div>
      </div>
    </div>
        `;
  };

  const options: object = {
    type: "donut",
    height: "400px",
    width: "600px",
    options: {
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      labels: ["Novo cliente", "Cliente retornando"],
      title: {
        text: "Transações por tipo de cliente",
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
      plotOptions: {
        pie: {
          customScale: 0.85,
          donut: {
            size: "50%",
          },
          offsetY: 20,
          offsetX: -30,
        },
      },
      tooltip: {
        custom: customTooltip,
        followCursor: true,
      },
      legend: {
        offsetY: 145,
        offsetX: 20,
        fontSize: "16px",
        labels: {
          colors: "#333333",
        },
        markers: {
          height: 20,
          width: 20,
          offsetY: 5,
          offsetX: -10,
        },
      },
      colors: ["#9FD8D5", "#7BB686"],
    },
    series: series,
  };

  return <Charts data={options} showSelect={false} stylize={true} loading={loading} />;
};
