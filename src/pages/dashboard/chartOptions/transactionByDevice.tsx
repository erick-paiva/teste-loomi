import Charts from "../../../components/charts";
import "./chartStyles/transactionByDevices.styles.css";

interface IDonutChartProps {
  series: string[];
  seriesIndex: number;
  dataPointIndex: number;
  w: object | any;
}

interface Props {
  loading?: boolean;
}

export const TransactionByDevice = ({ loading = true }: Props) => {
  const customTooltip = ({ seriesIndex, w }: IDonutChartProps) => {
    const series = w.config.series;
    const transaction: number | string =
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
    <div id="container-device">
      <span id="arrow-device"></span>
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
    width: "539px",
    options: {
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      labels: ["Desktop", "Mobile"],
      title: {
        text: "Transações por desktop",
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
      colors: ["#EB647A", "#252E48"],
    },
    series: [2861, 1600],
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
