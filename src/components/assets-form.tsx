import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Box, Button } from "@mui/material";
import TextInput from "./inputs/text-input";
import { STATUS } from "../models/status-enum";
import SelectInput from "./inputs/select-input";
import { IAssetType } from "../models/asset-type";

const AssetsForm = ({
  handelAddAssets,
}: {
  handelAddAssets: (value: IAssetType) => void;
}) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Min 5 character!")
      .max(100)
      .required("This filed is required!"),
    description: Yup.string()
      .min(5, "Min 5 character!")
      .max(100)
      .required("This filed is required!"),
    quantity: Yup.number()
      .min(1, "Min 1 character!")
      .required("This filed is required!"),
    status: Yup.string().required("This filed is required!"),
  });

  const initialValues = {
    name: "",
    description: "",
    quantity: "",
    status: "",
  };

  const handleSubmit = async (values: IAssetType) => {
    try {
      handelAddAssets(values);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values as IAssetType);
        resetForm();
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, values, errors, handleChange, touched }) => (
        <Form>
          <Box display="flex" ml={-2} flexWrap="wrap">
            <TextInput
              id="name"
              name="name"
              label="Name"
              type="text"
              placeholder="Diligent"
              value={values.name}
              handleChange={handleChange}
              form={{ errors: errors, touched: touched }}
            />
            <TextInput
              id="description"
              name="description"
              label="Description"
              type="text"
              placeholder="Super safe database"
              value={values.description}
              handleChange={handleChange}
              form={{ errors: errors, touched: touched }}
            />
            <TextInput
              id="quantity"
              name="quantity"
              label="Quantity"
              type="number"
              placeholder="1"
              value={String(values.quantity)}
              handleChange={handleChange}
              form={{ errors: errors, touched: touched }}
            />
            <SelectInput
              id="status"
              name="status"
              label="Status"
              type="text"
              placeholder="Select status"
              value={values.status}
              handleChange={handleChange}
              form={{ errors: errors, touched: touched }}
              options={STATUS}
            />

            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              sx={{ marginTop: "auto", mb: 3 }}
            >
              {isSubmitting ? "In progress.." : "Add"}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default AssetsForm;
