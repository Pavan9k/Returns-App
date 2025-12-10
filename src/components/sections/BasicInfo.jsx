import { Box, Button, TextField } from "@mui/material";

export function BasicInfo() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2, // spacing between fields
        // width: "300px", // optional width
        margin: "auto", // center horizontally
        mt: 4, // top margin
        mb:4,
        width:'90%'

      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField
          label="PAN"
          variant="outlined"
          fullWidth
          //value={pan}
          // onChange={(e) => setPan(e.target.value.toUpperCase())} // convert to uppercase
          inputProps={{ style: { textTransform: "uppercase" } }} // optional: shows uppercase while typing
        />
        <TextField label="Mobile" type="number" variant="outlined" fullWidth />
      </Box>

      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 2 }}>
        <Button variant="contained" color="error">
          Discard
        </Button>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Box>
  );
}
