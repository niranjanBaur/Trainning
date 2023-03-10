import "./datatable.scss";
import { userRows, userColumn } from "../../DataSource";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: () => {
        return (
          <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumn.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
