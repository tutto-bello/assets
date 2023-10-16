import {
  AccordionSummary,
  Typography,
  AccordionDetails,
  Accordion,
} from "@mui/material";
import React from "react";
import ArrowDownIcon from "./icons/arrow-down";

const AccordionComponent = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Accordion
      sx={{
        mb: 2,
        boxShadow: "none",
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ArrowDownIcon />}
        sx={{ flexDirection: "row-reverse" }}
      >
        <Typography sx={{ ml: 2 }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
