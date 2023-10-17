import React, { useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { findStatusByValue } from "../models/status-enum";
import { IAssetsResponse } from "../models/asset-type";
import { Box, IconButton, Paper } from "@mui/material";
import Link from "next/link";
import CustomNoRowsOverlay from "./icons/custom-no-rows-overlay";
import { motion } from "framer-motion";
import DeleteIcon from "./icons/delete";

const Table = ({
  data,
  isLoading,
  handelDeleteAssets,
}: {
  data: IAssetsResponse[];
  isLoading: boolean;
  handelDeleteAssets: (id: string) => void;
}) => {
  const [show, setShow] = useState(false);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerClassName: "custom-header",
      renderCell: (params: any) => (
        <Link href="#" style={{ textDecoration: "none", color: "#385F99" }}>
          {params.row["name"]}
        </Link>
      ),
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      headerClassName: "custom-header",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      headerClassName: "custom-header",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params: any) => (
        <Box
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          {findStatusByValue(params.row["status"])}

          <motion.div animate={{ opacity: show ? 1 : 0 }}>
            <IconButton onClick={() => handelDeleteAssets(params.row["id"])}>
              <DeleteIcon />
            </IconButton>
          </motion.div>
        </Box>
      ),
      headerClassName: "custom-header",
    },
  ];

  return (
    <Paper sx={{ boxShadow: "none" }}>
      <Box sx={{ maxHeight: 400, width: "100%" }}>
        <DataGrid
          loading={isLoading}
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{
            loadingOverlay: LinearProgress,
            noRowsOverlay: CustomNoRowsOverlay,
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
          disableColumnSelector
          disableColumnMenu
          sx={{
            "& .MuiDataGrid-columnHeaderRow": {
              backgroundColor: "#EBEEF2",
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
            "& .MuiDataGrid-menuIcon": {
              visibility: "hidden",
            },
            "& .custom-header": {
              backgroundColor: "#EBEEF2",
              "& .MuiDataGrid-columnHeaderTitleContainerContent": {
                color: "#000000",
              },
            },
            "& .MuiDataGrid-row:nth-of-type(odd)": {
              backgroundColor: "#FFFFFF",
            },
            "& .MuiDataGrid-row:nth-of-type(even)": {
              backgroundColor: "#F5F6F8",
            },
            "& .MuiDataGrid-cell": {
              color: "#1E1E1E",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "600",
            },
            "& .MuiDataGrid-virtualScrollerContent": {
              minHeight: "206px !important",
            },
          }}
        />
      </Box>
    </Paper>
  );
};

export default Table;
