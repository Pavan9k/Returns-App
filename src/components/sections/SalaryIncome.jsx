// import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";

// export function SalaryIncome() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         margin: "auto",
//         mt: 4,
//         mb: 4,
//         width: "90%",
//       }}
//     >
//       <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
//         {/* Employer Category */}
//         <TextField
//           select
//           label="Employer Category"
//           variant="outlined"
//           sx={{ minWidth: 223 }}
//         >
//           <MenuItem value="Private">Private</MenuItem>
//           <MenuItem value="Government">Government</MenuItem>
//           <MenuItem value="PSU">PSU</MenuItem>
//           <MenuItem value="Other">Other</MenuItem>
//         </TextField>

//         {/* Gross Salary */}
//         <TextField label="Gross Salary" type="number" variant="outlined" />

//         {/* Basic Salary */}
//         <TextField label="Basic Salary" type="number" variant="outlined" />

//         {/* HRA Received */}
//         <TextField label="HRA Received" type="number" variant="outlined" />

//         {/* Rent Paid */}
//         <TextField label="Actual Rent Paid" type="number" variant="outlined" />

//         {/* City Type */}
//         <TextField
//           select
//           label="City Type"
//           variant="outlined"
//           sx={{ minWidth: 223 }}
//         >
//           <MenuItem value="Metro">Metro</MenuItem>
//           <MenuItem value="Non-Metro">Non-Metro</MenuItem>
//         </TextField>

//         {/* Other Allowances */}
//         <TextField
//           label="Other Allowances 1"
//           type="number"
//           variant="outlined"
//         />
//         <TextField
//           label="Other Allowances 2"
//           type="number"
//           variant="outlined"
//         />
//         <TextField
//           label="Other Allowances 3"
//           type="number"
//           variant="outlined"
//         />
//         <TextField
//           label="Other Allowances 4"
//           type="number"
//           variant="outlined"
//           //    value={123}
//         />
//         <TextField
//           label="Professional Tax Paid"
//           type="number"
//           variant="outlined"
//           //    value={123}
//         />
//         <TextField
//           label="Employer PF Contribution"
//           type="number"
//           variant="outlined"
//           //    value={123}
//         />
//         <TextField
//           label="Employer NPS Contribution"
//           type="number"
//           variant="outlined"
//           //    value={123}
//         />

//         <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
//           <Typography variant="subtitle2">
//             Gratuity / Leave Encashment
//           </Typography>
//           <Box sx={{ display: "flex", gap: 1 }}>
//             <TextField select variant="outlined" sx={{ flex: 1 }}>
//               <MenuItem value="Gratuity">Gratuity</MenuItem>
//               <MenuItem value="Leave Encashment">Leave Encashment</MenuItem>
//             </TextField>
//             <TextField
//               type="number"
//               variant="outlined"
//               placeholder="Amount"
//               sx={{ flex: 1 }}
//             />
//           </Box>
//         </Box>
//       </Box>

//       {/* Buttons */}
//       <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 2 }}>
//         <Button variant="contained" color="error">
//           Discard
//         </Button>
//         <Button variant="contained" color="primary">
//           Save
//         </Button>
//       </Box>
//     </Box>
//   );
// }

import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";

export function SalaryIncome() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        margin: "auto",
        mt: 4,
        mb: 4,
        width: "90%",
      }}
    >
      {/* Salary Section */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="subtitle1" sx={{ width: "100%" }}>
          Salary Details
        </Typography>

        <TextField
          select
          label="Employer Category"
          variant="outlined"
          sx={{ minWidth: 223 }}
        >
          <MenuItem value="Private">Private</MenuItem>
          <MenuItem value="Government">Government</MenuItem>
          <MenuItem value="PSU">PSU</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>

        <TextField
          label="Gross Salary"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Basic Salary"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="HRA Received"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Actual Rent Paid"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          select
          label="City Type"
          variant="outlined"
          sx={{ minWidth: 223 }}
        >
          <MenuItem value="Metro">Metro</MenuItem>
          <MenuItem value="Non-Metro">Non-Metro</MenuItem>
        </TextField>
      </Box>

      {/* Allowances Section */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="subtitle1" sx={{ width: "100%" }}>
          Other Allowances
        </Typography>

        <TextField
          label="Other Allowances 1"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Other Allowances 2"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Other Allowances 3"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Other Allowances 4"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
      </Box>

      {/* Contributions Section */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="subtitle1" sx={{ width: "100%" }}>
          Contributions
        </Typography>

        <TextField
          label="Professional Tax Paid"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Employer PF Contribution"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
        <TextField
          label="Employer NPS Contribution"
          type="number"
          variant="outlined"
          sx={{ minWidth: 223 }}
        />
      </Box>

      {/* Gratuity / Leave Encashment */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="subtitle1">Gratuity / Leave Encashment</Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <TextField select variant="outlined" sx={{ flex: 1, minWidth: 223 }}>
            <MenuItem value="Gratuity">Gratuity</MenuItem>
            <MenuItem value="Leave Encashment">Leave Encashment</MenuItem>
          </TextField>
          <TextField
            type="number"
            variant="outlined"
            placeholder="Amount"
            sx={{ flex: 1, minWidth: 223 }}
          />
        </Box>
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
