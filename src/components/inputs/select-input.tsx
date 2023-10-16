import { Box, InputLabel, Select, MenuItem } from "@mui/material";
import React, { ChangeEvent } from "react";

const SelectInput = ({
  id,
  type,
  label,
  required,
  name,
  placeholder,
  handleChange,
  value,
  form,
  options,
}: {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  name: string;
  placeholder?: string;
  value: string | undefined;
  handleChange: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  form: { errors: Record<string, string>; touched: Record<string, boolean> };
  options: { value: string; label: string }[];
}) => {
  const hasError = Boolean(form.touched[name] && form.errors[name]);

  return (
    <Box sx={{ mb: 3, mr: 2 }}>
      <Box display="flex">
        <InputLabel error={hasError}>{label}</InputLabel>
        {hasError && (
          <InputLabel error={hasError}>
            {": "}
            {form.errors[name]}
          </InputLabel>
        )}
      </Box>
      <Select
        id={id}
        name={name}
        type={type}
        required={required}
        variant="outlined"
        value={value}
        onChange={handleChange}
        error={hasError}
        fullWidth
        sx={{ minWidth: 224 }}
        displayEmpty
      >
        <MenuItem disabled value="">
          <em>{placeholder}</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SelectInput;
