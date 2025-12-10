import { Box, TextField, Typography } from "@mui/material";

export function ProfessionalIncome() {
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
      {/* A. For Business */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6">A. Business</Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            label="Nature of Business"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Turnover"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Gross Receipts"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Expenses (detailed list)"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Net Profit"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Presumptive Income (44AD, 44ADA, 44AE)"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Book Profit (if maintaining books)"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Depreciation"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Stock Details"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="GST Number and Turnover"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="TDS by Clients"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
        </Box>

        {/* Balance Sheet Details */}
        <Typography variant="subtitle1">Balance Sheet Details</Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            label="Sundry Debtors"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Sundry Creditors"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Cash & Bank Balance"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Loans & Advances"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Fixed Assets"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Loans (Secured/Unsecured)"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
        </Box>
      </Box>

      {/* B. Freelancing / Consulting */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6">B. Freelancing / Consulting</Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            label="Receipts"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Expenses"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
          <TextField
            label="Net Taxable Income"
            type="number"
            variant="outlined"
            sx={{ minWidth: 223 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
