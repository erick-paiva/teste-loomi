import { Select } from "@chakra-ui/react";

interface ISelectProps {
  options: string[];
  placeholder?: string;
}

const SelectStart = ({ options, placeholder, ...rest }: ISelectProps | any) => {
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
