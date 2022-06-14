import { useEffect, useState } from "react";
import Charts from "../../../components/charts";
import "./chartStyles/transactionsByAge.styles.css";

interface IBarChartProps {
  series: string[];
  seriesIndex: number;
  dataPointIndex: number;
  w: object | any;
}
interface IResponse {
  category: string;
  value: number;
}

interface Props {
  data: {
    [key: string]: number[] | IResponse[] | any;
  };
  loading?: boolean;
}

export const TransactionsByAge = ({ data, loading }: Props) => {
  const mockSeries = [
    {
      name: "transações",
      data: [0, 600, 2000, 700, 3000, 2700, 2600],
    },
  ];

  const [series, setSeries] = useState(mockSeries);
  const [categoryes, setCategoryes] = useState<string[]>([
    "-18",
    "18-24",
    "25-34",
    "35-44",
    "45-54",
    "55-64",
    "65+",
  ]);

  useEffect(() => {
    try {
      const values: IResponse[] = Object.values(data["transactions-per-age"]);
      setSeries([
        {
          name: "transações",
          data: values.map((item) => item.value),
        },
      ]);

      setCategoryes(values.map((item) => item.category));
    } catch (error) {
      setSeries(mockSeries);
    }
  }, [data]);

  const customTooltip = ({
    series,
    seriesIndex,
    dataPointIndex,
  }: IBarChartProps) => {
    let value: number = +series[seriesIndex][dataPointIndex];
    let current: string | number = value;
    let extension = "";
    if (value >= 1000) {
      current = (value / 1000).toFixed(3);
      extension = `
      <span class="text">
        mil
      </span>
      `;
    }

    return `
    <div id="container-transactions">
      <span id="arrow-transactions"></span>
      <div class="arrow_box-transactions">
        ${current}
        ${extension}
      </div>
    </div>
        `;
  };

  const options = {
    type: "bar",
    height: "400px",
    width: "715px",
    options: {
      dataLabels: {
        enabled: false,
      },
      colors: ["#393c56"],
      title: {
        text: "Transações por idade",
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
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      chart: {
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
        stacked: true,
      },
      plotOptions: {
        bar: {
          barHeight: "50%",
          columnWidth: "50%",
          horizontal: true,
          borderRadius: 3,
          colors: {
            backgroundBarOpacity: 1,
          },
        },
      },
      xaxis: {
        categories: categoryes,
        labels: {
          style: {
            colors: "#4D4141",
            fontSize: "12px",
            fontFamily: "Ubuntu",
            fontWeight: "bold",
            letterSpacing: "0.48px",
          },
          axisBorder: {
            show: true,
            color: "#ededee",
            width: "1px",
          },
          formatter: function (y: number) {
            if (y >= 1000) {
              return y / 1000 + "MIL";
            }
            return y;
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#4D4141",
            fontSize: "12px",
            fontFamily: "Ubuntu",
            fontWeight: "bold",
            letterSpacing: "0.48px",
          },
        },
      },
      axisBorder: {
        show: true,
        color: "#ededee",
        height: "1px",
        width: "100%",
      },
      min: 0,
      max: 3500,
      tickAmount: 7,
      tooltip: {
        theme: false,
        custom: customTooltip,
      },
    },
    series: series,
  };

  return (
    <Charts
      data={options}
      showSelect={false}
      stylize={true}
      loading={loading}
    />
  );
};
