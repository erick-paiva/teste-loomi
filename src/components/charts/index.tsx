import { Box, useMediaQuery } from "@chakra-ui/react";
import { memo, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import SelectStart from "./select";
import SkeletonOfChart from "../skeletonOfChart";
import { ApexOptions } from "apexcharts";
import "./styles.css";
import { removeStrings } from "../../utils";
interface Props {
  data: {
    options?: object | ApexOptions | any;
    series?: ApexAxisChartSeries;
    type?: string;
    height?: number | string;
    width?: number | string;
  };
  showSelect?: boolean;
  stylize?: boolean;
  loading?: boolean;
}

const Chart: React.FC<Props> = ({
  data,
  showSelect = true,
  stylize = false,
  loading = false,
}: Props) => {
  const { options, series, type = "bar", height = 400, width = 608 } = data;
  const isHorizontal = options?.plotOptions?.bar?.horizontal as boolean;

  const [newHeight, setNewHeight] = useState(removeStrings(height));
  const [newWidth, setNewWidth] = useState(removeStrings(width));

  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  const [isLargerThan1440] = useMediaQuery("(min-width: 1440px)");

  useEffect(() => {
    if (isLargerThan1440) {
      setNewHeight(removeStrings(height) - 50);
      setNewWidth(removeStrings(width) - 50);
    } else if (isLargerThan1000) {
      setNewHeight(removeStrings(height) - 100);
      setNewWidth(removeStrings(width) - 100);
    }
  }, [isLargerThan1000]);

  if (loading) {
    return (
      <SkeletonOfChart
        type={type}
        quantity={isHorizontal ? 7 : 10}
        horizontal={isHorizontal}
        height={newHeight}
        width={newWidth}
      />
    );
  }

  return (
    <Box position="relative" fontFamily="Ubuntu">
      <ReactApexChart
        type={type as string | any}
        options={options}
        series={series}
        height={newHeight + "px"}
        width={newWidth + "px"}
        {...(stylize && { id: "chart" })}
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
          w={{
            lg: "90px",
            xl: "110px",
            "2xl": "179px",
          }}
          h="37px"
        />
      )}
    </Box>
  );
};
export default memo(Chart);
