import './UsersList.css';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import {userRows} from '../../testData'

const Userslist = () => {

    const [data, setdata] = useState(userRows);

    const handleDelete = (id) => {
        setdata(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "user",
          headerName: "User",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username}
              </div>
            );
          },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
          field: "transaction",
          headerName: "Transaction Volume",
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/userslist/" + params.row.id}>
                  <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="userListDelete"
                  onClick={() => handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
      ];

    return (
        <div className='usersList'>
            <DataGrid 
                rows={data}
                disableSelectionOnClick
                columns={columns}
                checkboxSelection
            />
        </div>
    );
}

export default Userslist;
