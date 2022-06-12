import "./chartStyles/orderPerMonth.styles.css";

export const orderPerMonth = (series?: object): any => {
  
  const data =  {
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

  return data;
};
