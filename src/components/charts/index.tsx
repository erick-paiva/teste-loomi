import { Box} from "@chakra-ui/react";
import { memo, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import SelectStart from "./select";
import "./styles.css";
interface Props {
  data: {
    options?: any;
    series?: any;
    type?: string;
    height?: number | string;
    width?: number | string;
  };
  showSelect?: boolean;
  stylize?: boolean;
}

const ChartOrdersMonth: React.FC<Props> = ({
  data,
  showSelect = true,
  stylize = false,
}: Props) => {

  const {
    options,
    series,
    type = "bar",
    height = "400px",
    width = "608px",
  } = data;

  return (
    <Box position="relative" fontFamily="Ubuntu">
      <ReactApexChart
        type={type as any}
        options={options}
        series={series}
        height={height}
        width={width}
        {...(stylize && {id: "chart"})}
      />
      {showSelect && (
        <SelectStart
          zIndex="10"
          placeholder="Ano"
          options={[
            "JAN",
            "FEV",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
          ]}
          bg="gray.50"
          color="black.400"
          position="absolute"
          top="25px"
          right="24px"
          opacity="0.4"
          w="179px"
          h="37px"
        />
      )}
    </Box>
  );
};
export default memo(ChartOrdersMonth);
