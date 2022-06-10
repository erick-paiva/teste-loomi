import { Select } from "@chakra-ui/react";

interface IProps {
  options: string[];
  placeholder?: string;
  rest?: any;
}

const SelectStart = ({ options, placeholder, ...rest }: any) => {
  return (
    <Select placeholder={placeholder} {...rest}>
      {options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default SelectStart;
