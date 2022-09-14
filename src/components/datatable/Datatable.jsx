import React from 'react';
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datasource';

export const Datatable = () => {
  const actionColumn = [
    {
      field: "action", 
      headerName: "Action", 
      width: 200, 
      renderCell:() => {
        return(
          <div className="action">
            <div className="view--item">View</div>
            <div className="delete--item">Delete</div>
          </div>
        );
      }
    },
  ];

  return (
    <div className="datatable">
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
