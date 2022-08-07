const uuid = require("uuid").v4;

const action = {
  updateData: (data) => {
    return {
      type: "UPDATE",
      payload: data,
    };
  },
  addData: (data, addDetail) => {
    return {
      type: "ADD",
      payload: { data: { ...data, id: uuid() }, addDetail },
    };
  },
  deleteData: (data) => {
    return {
      type: "DELETE",
      payload: data,
    };
  },
};

module.exports = {
  action,
};
