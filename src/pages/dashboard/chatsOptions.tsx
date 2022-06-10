import "./style.css";

export const chart1 = {
  type: "bar",
  height: "400px",
  width: "608px",
  options: {
    colors: ["#00a8ff", "#ff0080"],
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
  },
  series: [
    {
      name: "All Tasks",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
};

export const orderPerMonth = {
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
  series: [
    {
      name: "pedidos",
      data: [31, 40, 28, 51, 42, 93, 50, 70, 60, 82],
    },
  ],
};

interface IBarChartProps {
  series: string[];
  seriesIndex: number;
  dataPointIndex: number;
  w: object | any;
}

export const braidsByAge = {
  type: "bar",
  height: "400px",
  width: "608px",
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
      width: '100%',
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
        columnWidth: '50%',
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
      custom: function ({
        series,
        seriesIndex,
        dataPointIndex,
        w,
      }: IBarChartProps) {
        return `
        <div id="container">
          <span id="arrow"></span>
          <div class="arrow_box">
            ${(+series[seriesIndex][dataPointIndex]).toLocaleString()}
              <span class="text">
                mil
              </span>
          </div>
        </div>
            `;
      },
    },
  },
  series: [
    {
      name: "transações",
      data: [0, 1500, 2000, 2500, 3000, 2700, 2600],
    },
  ],
};

