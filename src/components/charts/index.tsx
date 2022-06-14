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
  const {
    options,
    series,
    type = "bar",
    height = "400px",
    width = "608px",
  } = data;
  const isHorizontal = options?.plotOptions?.bar?.horizontal as boolean;

  const [newHeight, setNewHeight] = useState(height);
  const [newWidth, setNewWidth] = useState(width);

  const [isLargerThan1000] = useMediaQuery("(max-width: 1000px)");

  const [isLargerThan1440] = useMediaQuery("(max-width: 1440px)");

  useEffect(() => {
    if (isLargerThan1000) {
      setNewHeight(removeStrings(height) - 100);
      setNewWidth(removeStrings(width) - 100);
    } else if (isLargerThan1440) {
      setNewHeight(removeStrings(height) - 50);
      setNewWidth(removeStrings(width) - 50);
    }
  }, [isLargerThan1000]);

  if (loading) {
    return (
      <SkeletonOfChart
        type={type}
        quantity={isHorizontal ? 7 : 10}
        horizontal={isHorizontal}
      />
    );
  }

  return (
    <Box position="relative" fontFamily="Ubuntu">
      <ReactApexChart
        type={type as string | any}
        options={options}
        series={series}
        height={newHeight}
        width={newWidth}
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
          w="179px"
          h="37px"
        />
      )}
    </Box>
  );
};
export default memo(Chart);
