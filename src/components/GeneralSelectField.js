import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

export default function GeneralSelectField(props) {
  const { label, dataKey, data, setData, dropDownList, disabled } = props;
  const [value, setValue] = useState("");
  useEffect(() => {
    if (dataKey && data) setValue(data[`${dataKey}`]);
  }, [data, dataKey]);

  const handleChange = (event) => {
    // console.log(event.target.value);
    setData({
      ...data,
      [`${dataKey}`]: event.target.value,
    });
  };

  return (
    <Box sx={{ m: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
          disabled={disabled}
        >
          {dropDownList.map((ele) => {
            return <MenuItem value={ele}>{ele}</MenuItem>;
          })}
          <MenuItem value={0} unselectable></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
