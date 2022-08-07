import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

export default function GeneralInputField(props) {
  const { label, dataKey, data, setData,disabled } = props;
  const [value, setValue] = useState(null);
  useEffect(() => {
    if (dataKey && data) setValue(data[`${dataKey}`]);
  }, [data, dataKey]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setData({
      ...data,
      [`${dataKey}`]: event.target.value,
    });
  };

  return (
    <Box
      sx={{
        m: 2,
      }}
    >
      <TextField
        label={label}
        value={value || ""}
        fullWidth
        onChange={handleChange}
        disabled = {disabled}
      />
    </Box>
  );
}
