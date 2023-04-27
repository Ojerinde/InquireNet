import React, { useState } from "react";
import Select from "react-select";
interface Props {
  options: { value: string; label: string }[];
  label: string;
  placeholder: string;
  onSelect: (track: string) => void;
  selected: string;
}
const SelectInput: React.FC<Props> = ({
  label,
  options,
  placeholder,
  onSelect,
  selected,
}) => {
  const updateSelection = (selectedOption: any) => {
    onSelect(selectedOption.label);
  };

  return (
    <div className="select">
      <label htmlFor="track" className="select__label">
        {label}:
      </label>
      <Select
        value={selected}
        placeholder={selected}
        onChange={updateSelection}
        options={options}
        styles={{
          control: (baseStyles: any, state: any) => ({
            ...baseStyles,
            fontSize: "1.6rem",
            borderColor: state.isFocused ? "#44607c" : "#6085aa",
            padding: ".6rem 0",
            borderWidth: "0.05rem",
            "&:hover": {
              cursor: "pointer",
              borderColor: state.isFocused ? " #6085aa" : "#44607c",
            },
          }),
          option: (provided: any, state: any) => ({
            ...provided,
            fontSize: "1.6rem",
            color: state.isSelected ? "#6085aa" : "#44607c",
            backgroundColor: state.isSelected ? "#3a516a" : "white",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: state.isSelected ? "#007bff" : "#6085aa",
              color: state.isSelected ? "#fff" : "#fff",
            },
          }),
        }}
      />
    </div>
  );
};
export default SelectInput;
