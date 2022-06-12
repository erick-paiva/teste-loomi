import "./chartStyles/braids.styles.css";

interface IBarChartProps {
  series: string[];
  seriesIndex: number;
  dataPointIndex: number;
  w: object | any;
}

export const braidsByAge = (series?: object): any => {
  const customTooltip = ({
    series,
    seriesIndex,
    dataPointIndex,
  }:
  IBarChartProps) => {
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
    <div id="container">
      <span id="arrow"></span>
      <div class="arrow_box">
        ${current}
        ${extension}
      </div>
    </div>
        `;
  };

  const data = {
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
        categories: ["-18", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"],
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
    series: [
      {
        name: "transações",
        data: [0, 600, 2000, 700, 3000, 2700, 2600],
      },
    ],
  };

  return data;
};
