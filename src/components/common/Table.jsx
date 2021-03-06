import React from "react";
import { DataGrid } from "@material-ui/data-grid";

export const Table = ({ rows, columns }) => {
  return (
    <div style={{ height: 400, width: "80%", margin: "auto" }}>
      <DataGrid
        disableSelectionOnClick
        rowsPerPageOptions={[]}
        rows={rows}
        columns={columns}
      />
    </div>
  );
};
