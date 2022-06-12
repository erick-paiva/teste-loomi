import "./chartStyles/braids.styles.css";

interface IDonutChartProps {
  series: string[];
  seriesIndex: number;
  dataPointIndex: number;
  w: object | any;
}

export const categoriesOrders = (series?: object): any => {
  const customTooltip = ({ seriesIndex, w }: IDonutChartProps) => {
    const series = w.config.series;
    const value: number | string = (+series[seriesIndex])
      .toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
      .split("R$")[1];

    return `
    <div id="container">
      <span id="arrow"></span>
      <div class="arrow_box">
        <span class="text">
          R$
        </span>
        ${value}
      </div>
    </div>
        `;
  };

  const data = {
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

  return data;
};