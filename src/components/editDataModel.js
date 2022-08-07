import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import GeneralInputField from "./GeneralInputField";
import { useEffect, useState } from "react";
import GeneralSelectField from "./GeneralSelectField";
import { useDispatch } from "react-redux";
import action from "../Redux/action";
// import { action } from "../Redux/action";
// import { updateDataActionCreater } from "../Redux/actionCreater";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditDataModel(props) {
  const { open, selectedData, handleClose, editableList, addDetail } = props;
  const [newData, setNewData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedData && !addDetail) setNewData(selectedData);
    if (addDetail) setNewData({});
  }, [selectedData]);

  //   console.log("data!!", selectedData, newData);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {addDetail ? "Enter Details" : "Edit Your Data"}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {editableList?.map((ele) => {
              return ele.type === "string" ? (
                <GeneralInputField
                  label={ele.name}
                  dataKey={ele.dataKey}
                  data={newData}
                  setData={setNewData}
                />
              ) : (
                <GeneralSelectField
                  label={ele.name}
                  dataKey={ele.dataKey}
                  data={newData}
                  setData={setNewData}
                  dropDownList={ele.dropDownData}
                />
              );
            })}
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            display="flex"
            flexDirection="row-reverse"
          >
            <Button
              variant="contained"
              onClick={(event) => {
                event.preventDefault();
                // console.log(newData);
                addDetail
                  ? dispatch(action.addData(newData, addDetail))
                  : dispatch(action.updateData(newData));
                handleClose();
              }}
            >
              {addDetail ? "Add" : "Update"}
            </Button>
            <Button
              variant="text"
              onClick={(event) => {
                handleClose();
              }}
            >
              Cancel
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
