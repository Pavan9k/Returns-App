import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
} from "@mui/material";

export function HouseProperty() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        margin: "auto",
        mt: 4,
        mb: 4,
        width: "90%",
      }}
    >
      <FormControlLabel control={<Checkbox />} label="Has House Property" />

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {/* Property Type */}
        <TextField
          select
          label="Property Type"
          variant="outlined"
          sx={{ minWidth: 223 }}
        >
          <MenuItem value="Residential">Residential</MenuItem>
          <MenuItem value="Commercial">Commercial</MenuItem>
          <MenuItem value="Land">Land</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>

        {/* Address of Property */}
        <TextField
          label="Address Of Property"
          variant="outlined"
          multiline
          rows={2}
          fullWidth
        />

        {/* Owner Share Percentage */}
        <TextField
          label="Owner Share Percentage"
          type="number"
          variant="outlined"
        />

        {/* Annual Rent Received */}
        <TextField
          label="Annual Rent Received"
          type="number"
          variant="outlined"
        />

        {/* Municipal Taxes Paid */}
        <TextField
          label="Municipal Taxes Paid"
          type="number"
          variant="outlined"
        />

        {/* Home Loan Interest Sec 24b */}
        <TextField
          label="Home Loan Interest Sec 24b"
          type="number"
          variant="outlined"
        />

        {/* Principal Amount 80C */}
        <TextField
          label="Principal Amount 80C"
          type="number"
          variant="outlined"
        />

        {/* Pre Construction Interest */}
        <TextField
          label="Pre Construction Interest"
          type="number"
          variant="outlined"
        />
      </Box>

      {/* Buttons */}
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
