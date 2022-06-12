"./chartStyles/profile.styles.css";

interface IBarChartProps {
  series: string[];
  seriesIndex: number;
  dataPointIndex: number;
  w: object | any;
}

export const profitExpectation = (series?: object): any => {
  const customTooltip = ({
    dataPointIndex,
    w,
  }: IBarChartProps) => {
    const series = w.config.series;
    const currentMonth = series[0].data[dataPointIndex];

    const value = currentMonth
      .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      .split("R$")[1];

    const lastYear = series[1].data[dataPointIndex]
      .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      .split("R$")[1];
    const { categoryLabels } = w.globals;
    let currentMonthTreated = series[0].data.indexOf(currentMonth, 0);

    return `
    <div id="container-wait">
      <div class="container">
      
        <div class="arrow_box-await">
          <div class="arrow-box-set" >
            <h3>Mês atual</h3>
            <span>${categoryLabels[currentMonthTreated]}</span>
          </div>
          <p>
            <span class="text">
              R$
            </span>
            ${value}
          </p>
        </div>

        <div class="arrow_box-await-two">
          <h3>Mês do ano anterior</h3>
          <p>
            <span class="text">
              R$
            </span>
            ${lastYear}
          </p>
        </div>
      </div>
      
    </div>
        `;
  };

  function formatCurrent(value: number | string, obj: any) {
    return (+value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const data = {
    type: "line",
    height: "400px",
    width: "715px",
    options: {
      colors: ["#9FD8D5", "#F78899", "#393C56", "#E0347D"],
      title: {
        text: "Expectativa de lucro x lucro real",
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
        show: false,
      },
      stroke: {
        width: [0, 4, 4, 4],
        curve: "straight",
        lineCap: "butt",
      },
      chart: {
        type: "line",
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
      },
      markers: {
        size: 5,
        colors: "#ffffff",
        strokeColors: ["#F78899", "#9FD8D5", "#E0347D", "#393C56"],

        strokeWidth: 2,
        shape: "circle",
        radius: 2,
        showNullDataPoints: true,
        hover: {
          size: 6,
        },
      },
      plotOptions: {
        bar: {
          barHeight: "10%",
          horizontal: false,
          columnWidth: "50%",
          endingShape: "rounded",
          borderRadius: 3,
          colors: {
            backgroundBarOpacity: 1,
          },
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
        tooltip: {
          enabled: false,
        },
      },
      tooltip: {
        custom: customTooltip,
        fixed: {
          enabled: false,
          position: "topLeft",
          offsetY: 10,
          offsetX: 60,
        },
        y: {
          formatter: formatCurrent,
        },
        intersect: false,
        style: {
          fontSize: "16px",
        },
        enabledOnSeries: [0, 1],
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
      axisBorder: {
        show: true,
        color: "#ededee",
        height: "1px",
        width: "100%",
      },
      dataLabels: {
        enabledOnSeries: [2, 3],
      },
      legend: {
        show: true,
        markers: {
          fillColors: ["#9FD8D5", "#F78899", "#393C56", "#E0347D"],
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
    series: [
      {
        name: "Mês atual",
        data: [500, 650, 400, 700, 780, 730, 400, 550, 465, 545, 565, 575],
        type: "column",
      },
      {
        name: "Mês do ano anterior",
        data: [200, 700, 600, 1000, 400, 600, 450, 398, 400, 380, 400, 360],
        type: "column",
      },
      {
        name: "Real do ano anterior",
        type: "line",
        data: [200, 700, 600, 1000, 400, 600, 450, 398, 400, 380, 400, 360],
      },
      {
        name: "Expectativa do ano anterior",
        type: "line",
        data: [50, 70, 600, 450, 730, 900, 900, 1100, 500, 490, 354, 670],
      },
    ],
  };

  return data;
};
