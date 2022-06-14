import { useEffect, useState } from "react";
import Charts from "../../../components/charts";
import "./chartStyles/categories.styles.css";

interface IDonutChartProps {
  series: string[];
  seriesIndex: number;
  dataPointIndex: number;
  w: object | any;
}

export const CategoriesOrders = (): any => {
  const [loading, setLoading] = useState(true);
  const customTooltip = ({ seriesIndex, w }: IDonutChartProps) => {
    const series = w.config.series;
    const value: number | string = (+series[seriesIndex])
      .toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
      .split("R$")[1];

    return `
    <div id="container-category">
      <span id="arrow-category"></span>
      <div class="arrow_box-categorie">
        <span class="text">
          R$
        </span>
        ${value}
      </div>
    </div>
        `;
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  const options: object = {
    type: "donut",
    height: "400px",
    width: "608px",
    options: {
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      labels: [
        "Mesa Eva Laranja",
        "Mesa Eva Vermelho",
        "Mesa Eva Preta",
        "Mesa Eva Azul",
        "Mesa Eva Verde",
      ],
      title: {
        text: "Pedidos por categoria",
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
        offsetX: 10,
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
      colors: ["#F7C982", "#EC657A", "#252E48", "#9FD8D5", "#7BB686"],
    },
    series: [44, 35, 22, 80, 15],
  };

  return <Charts data={options} showSelect={false} stylize={true} loading={loading} />;
};
