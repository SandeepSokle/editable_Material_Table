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

export default function DeleteConfirmation(props) {
  const { open, selectedData, editableList, handleClose } = props;
  const [newData, setNewData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedData) setNewData(selectedData);
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
            Are You Want To Delete This data?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {editableList?.map((ele) => {
              return ele.type === "string" ? (
                <GeneralInputField
                  label={ele.name}
                  dataKey={ele.dataKey}
                  data={newData}
                  setData={setNewData}
                  disabled
                />
              ) : (
                <GeneralSelectField
                  label={ele.name}
                  dataKey={ele.dataKey}
                  data={newData}
                  setData={setNewData}
                  dropDownList={ele.dropDownData}
                  disabled
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
                console.log(newData);
                dispatch(action.deleteData(newData));
                handleClose();
              }}
            >
              Delete
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
