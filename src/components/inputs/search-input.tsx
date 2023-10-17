import {
  TextField,
  InputLabel,
  Box,
  InputAdornment,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import SearchIcon from "../icons/search";

const SearcuInput = ({
  handleChange,
  value,
  placeholder,
}: {
  value: string;
  handleChange: Dispatch<SetStateAction<string>>;
  placeholder: string;
}) => {
  return (
    <Box mb={3} mr={2} ml={-1}>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <OutlinedInput
          type="text"
          inputProps={{ shrink: true }}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          fullWidth
          sx={{ minWidth: 224 }}
          placeholder={placeholder}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default SearcuInput;
