import { Button } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import DeleteConfirmation from "./components/DeleteConfirmation";
import EditDataModel from "./components/editDataModel";
import { Table } from "./components/table/materialTable";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

function App() {
  // console.log("In app")
  const [open, setOpen] = useState(false);
  const [openD, setOpenD] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [addDetail, setAddDetail] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setSelectedData(null);
    setOpen(false);
  };

  const handleOpenD = () => setOpenD(true);
  const handleCloseD = () => {
    setSelectedData(null);
    setOpenD(false);
  };

  const handleCloseAdd = () => {
    setSelectedData(null);
    setOpenAdd(false);
  };

  const tableData = useSelector((state) => {
    return state.data;
  });

  const columns = [
    {
      title: "First Name",
      field: "first_name",
      cellStyle: {
        // backgroundColor: "#039be5",
        // color: "#FFF",
        width: "8rem",
      },
    },
    {
      title: "Middle Name",
      field: "middle_name",
      cellStyle: {
        // backgroundColor: "#039be5",
        // color: "#FFF",
        width: "8rem",
      },
      // headerStyle: {
      //   backgroundColor: "#039be5",
      // },
    },
    {
      title: "Last Name",
      field: "last_name",
      cellStyle: {
        // backgroundColor: "#039be5",
        // color: "#FFF",
        width: "8rem",
      },
    },
    {
      title: "Gender",
      field: "gender",
      cellStyle: {
        // backgroundColor: "#039be5",
        // color: "#FFF",
        width: "8rem",
      },
    },
    {
      title: "Email",
      field: "email",
      cellStyle: {
        // backgroundColor: "#039be5",
        // color: "#FFF",
        width: "8rem",
      },
    },
    {
      title: "Phone Number",
      field: "phone_number",
      cellStyle: {
        // backgroundColor: "#039be5",
        // color: "#FFF",
        width: "8rem",
      },
    },
    {
      title: "Address",
      field: "address",
      cellStyle: {
        // backgroundColor: "#039be5",
        // color: "#FFF",
        width: "20rem",
        height: "2rem",
      },
    },
  ];
  const editableList = [
    { name: "First Name", dataKey: "first_name", type: "string" },
    { name: "Middle Name", dataKey: "middle_name", type: "string" },
    { name: "Last Name", dataKey: "last_name", type: "string" },
    {
      name: "Gender",
      dataKey: "gender",
      type: "dropDown",
      dropDownData: ["Male", "Female"],
    },
    { name: "Email", dataKey: "email", type: "string" },
    { name: "Phone Number", dataKey: "phone_number", type: "string" },
    { name: "Address", dataKey: "address", type: "string" },
  ];

  //popOver
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopOver = () => {
    setAnchorEl(null);
  };

  const openPopOver = Boolean(anchorEl);
  const id = openPopOver ? "simple-popover" : undefined;
  return (
    <div
      className="App"
      style={{
        width: "98vw",
        height: "90vh",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="footor"></div>
      <div>
        <Table
          data={tableData}
          columns={columns}
          setSelectedData={setSelectedData}
          handleOpen={handleOpen}
          handleOpenD={handleOpenD}
          title="Editable Material Table"
        />
        {open ? (
          <EditDataModel
            open={open}
            editableList={editableList}
            selectedData={selectedData}
            handleClose={handleClose}
          />
        ) : (
          ""
        )}
        {openD ? (
          <DeleteConfirmation
            open={openD}
            editableList={editableList}
            selectedData={selectedData}
            handleClose={handleCloseD}
          />
        ) : (
          ""
        )}
      </div>

      <div
        className="header"
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Button variant="contained" onClick={handleClick}>
          Add Data
        </Button>
        <Popover
          id={id}
          open={openPopOver}
          anchorEl={anchorEl}
          onClose={handleClosePopOver}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              padding: "1rem 3rem",
            }}
          >
            <Button
              variant="contained"
              sx={{ m: 1 }}
              onClick={() => {
                setOpenAdd(true);
                setAddDetail({
                  place: "front",
                });
              }}
            >
              In Front
            </Button>
            <Button
              variant="contained"
              sx={{ m: 1 }}
              onClick={() => {
                setOpenAdd(true);
                setAddDetail({
                  place: "end",
                });
              }}
            >
              In End
            </Button>
          </Typography>
        </Popover>
        {openAdd ? (
          <EditDataModel
            open={openAdd}
            addDetail={addDetail}
            editableList={editableList}
            selectedData={selectedData}
            handleClose={handleCloseAdd}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
