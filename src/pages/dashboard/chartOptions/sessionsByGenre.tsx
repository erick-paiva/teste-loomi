import { useEffect, useState } from "react";
import Charts from "../../../components/charts";
import "./chartStyles/sessionsByGenre.styles.css";

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

export const SessionsByGenre = ({ data, loading = true }: Props) => {
  const mockSeries = [20, 30];

  const [series, setSeries] = useState(mockSeries);
  useEffect(() => {
    try {
      const values: number[] = Object.values(data["sessions-per-sex"]);
      setSeries(values);
    } catch (error) {
      setSeries(mockSeries);
    }
  }, [data]);

  const customTooltip = ({ seriesIndex, w }: IDonutChartProps) => {
    const series = w.config.series;
    const value: number | string = (+series[seriesIndex])
      .toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
      .split("R$")[1];

    return `
    <div id="container-genre">
      <span id="arrow-genre"></span>
      <div class="arrow_box-genre">
        <span class="text">
          R$
        </span>
        ${value}
      </div>
    </div>
        `;
  };

  const options: object = {
    type: "donut",
    height: "400px",
    width: "539px",
    options: {
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      labels: ["Masculino", "Femenino"],
      title: {
        text: "Sessões por gênero",
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
      colors: ["#F7C982", "#252E48"],
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
