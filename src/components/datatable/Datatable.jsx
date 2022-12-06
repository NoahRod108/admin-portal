import React, { useState } from 'react';
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datasource';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Datatable = () => {
    const param = useParams();
    const [data, setData] = useState(userRows);
    const [user, setUser] = useState(userRows);

    // table buttons
    const handleDelete = (id) =>{
        setData(data.filter(item => item.id !== id));
    }

    const handleSingleUser = (id) =>{
        setUser(user.find(item => item.id === id))
    }
    
  const actionColumn = [
    {
      field: "action",
      headerName: "Action", 
      width: 200, 
      renderCell:(param) => {
        return(
          <div className="action">
            <Link to={`/admin-portal/users/${param.row.id}`} style={{textDecoration:"none"}}>
                <div className="view--item" onClick={() => handleSingleUser(param.userId)}>View</div>
            </Link>
            <div className="delete--item" onClick={() => handleDelete(param.row.id)}>Delete</div>
          </div>
        );
      }
    },
  ];

  return (
    <div className="datatable">
        <DataGrid
            className='user--datatable'
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
        />
    </div>
  );
}
