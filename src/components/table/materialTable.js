import MaterialTable from "material-table";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const Table = (props) => {
  const { data, columns, setSelectedData, handleOpen, handleOpenD, title } =
    props;
  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      actions={[
        {
          icon: () => <EditIcon />,
          tooltip: "Save User",
          onClick: (event, rowData) => {
            // alert("You saved " + rowData.name);
            setSelectedData(rowData);
            handleOpen();
          },
        },
        (rowData) => ({
          icon: () => <DeleteIcon />,
          tooltip: "Delete User",
          onClick: (event, rowData) => {
            // alert("You want to delete " + rowData.name);
            setSelectedData(rowData);
            handleOpenD();
          },
          //   disabled: rowData.birthYear < 2000,
        }),
      ]}
      options={{
        actionsColumnIndex: -1,
        rowStyle: {
          // backgroundColor: "#EEE",
          height: "2rem",
          // maxWidth: "80%",
        },
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
        },
      }}
    />
  );
};
