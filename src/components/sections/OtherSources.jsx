import { Box, TextField, Typography } from "@mui/material";

export function OtherSources() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "90%",
        margin: "auto",
        mt: 4,
        mb: 4,
      }}
    >
      <Typography variant="h6">Other Sources of Income</Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <TextField
          label="Savings Bank Interest"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="FD Interest"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="RD Interest"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Bond Interest"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Dividend Income"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Family Pension"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Income from Sub-letting"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Gifts (Received above limits)"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Lottery / Games / Online Fantasy Income"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Race Horses Income"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Bitcoin / Crypto Income"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Other Taxable Casual Income"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
      </Box>
    </Box>
  );
}
