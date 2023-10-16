import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { findStatusByValue } from "../models/status-enum";
import { AssetType } from "../models/project-type";
import { Box, Paper } from "@mui/material";
import Link from "next/link";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    editable: true,
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
    editable: true,
    headerClassName: "custom-header",
  },
  {
    field: "quantity",
    headerName: "Quantity",
    flex: 1,
    editable: true,
    headerClassName: "custom-header",
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    valueGetter: (params: GridValueGetterParams) =>
      `${findStatusByValue(params.row["status"])}`,
    headerClassName: "custom-header",
  },
];

const Table = ({ data }: { data: AssetType[] }) => {
  return (
    <Paper sx={{ boxShadow: "none" }}>
      <Box sx={{ maxHeight: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
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
          }}
        />
      </Box>
    </Paper>
  );
};

export default Table;
