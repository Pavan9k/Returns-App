import { Box, TextField, Typography } from "@mui/material";

export function CapitalGains() {
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
      {/* A. Equity / Mutual Funds */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6">A. Equity / Mutual Funds</Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            label="Long Term Capital Gain (LTCG)"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Long Term Capital Loss (LTCL)"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Short Term Capital Gain (STCG)"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Short Term Capital Loss (STCL)"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
        </Box>
      </Box>

      {/* B. Property Sale */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6">B. Property Sale</Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            label="Sale Consideration"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Purchase Value"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Year of Purchase"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Indexed Cost"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Stamp Duty Value"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Improvement Cost"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Brokerage / Transfer Expenses"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Exemption Claimed (54, 54EC, 54F)"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
        </Box>
      </Box>

      {/* C. Other Assets */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6">C. Other Assets</Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            label="Gold"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Bonds"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Debentures"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="International Stocks"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Crypto / Bitcoin Gains"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Crypto Losses (Cannot be set-off)"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Winning Games"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
