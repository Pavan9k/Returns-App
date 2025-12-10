import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { allDetailsPaths } from "../paths/pathConstants";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CardComponent } from "../CardComponent";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/slices/createUserSlice";
import { BasicInfo } from "../sections/BasicInfo";
import { SalaryIncome } from "../sections/SalaryIncome";
import { HouseProperty } from "../sections/HouseProperty";
import { CapitalGains } from "../sections/capitalGains";
import { ProfessionalIncome } from "../sections/ProfessionalIncome";
import { OtherSources } from "../sections/OtherSources";

export function UserCreation() {
  const [userId, setUserId] = useState(null);
  const [mobile, setMobile] = useState("");
  const [financialYear, setFinancialYear] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isChild = Object.values(allDetailsPaths).some((path) =>
    location.pathname.startsWith(`/usercreation/${path}`)
  );

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const defaultFinancialYear =
    currentMonth >= 4
      ? `${currentYear}-${currentYear + 1}`
      : `${currentYear - 1}-${currentYear}`;

  const financialYears = [
    `${currentYear - 1}-${currentYear}`,
    `${currentYear}-${currentYear + 1}`,
    `${currentYear + 1}-${currentYear + 2}`,
  ];

  useEffect(() => {
    setFinancialYear(defaultFinancialYear);
  }, []);

  const handleSave = () => {
    if (!/^\d{10}$/.test(mobile)) {
      setError("Mobile number must be exactly 10 digits.");
      return;
    }

    setError("");

    const userInput = {
      id: mobile,
      financialYear: {
        year1: {
          basicInformation: { mobile: { value: mobile } },
        },
      },
    };

    dispatch(createUser(userInput))
      .unwrap()
      .then(() => setUserId(mobile))
      .catch((err) => setError(err.message));
  };

  const handleClose = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value || value.length <= 10) setError("");
    setMobile(value);
  };

  if (isChild) return <Outlet />;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 5 }}>
      {/* <Dialog
        open={!userId}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: { minHeight: 350, display: "flex", flexDirection: "column" },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Enter User Details
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <TextField
            autoFocus
            label="Mobile Number"
            value={mobile}
            onChange={handleChange}
            fullWidth
            error={!!error}
            helperText={error || "Enter 10-digit mobile number"}
            type="tel"
            onKeyPress={(e) => e.key === "Enter" && handleSave()}
          />

          <FormControl fullWidth>
            <InputLabel id="financial-year-label">Financial Year</InputLabel>
            <Select
              labelId="financial-year-label"
              value={financialYear}
              label="Financial Year"
              onChange={(e) => setFinancialYear(e.target.value)}
            >
              {financialYears.map((fy) => (
                <MenuItem key={fy} value={fy}>
                  {fy}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog> */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
          p: 3,
          borderRadius: 2,
          backgroundColor: "#f5f5f5",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600, color: "#1976d2" }}>
          User Creation
        </Typography>
        <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 500, color: "#555" }}
          >
            Id: <strong>{userId}</strong>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 500, color: "#555" }}
          >
            FY: <strong>{financialYear}</strong>
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box sx={{ border: "1px solid #ddd", borderRadius: 2, mb: 3 }}>
          <CardComponent
            name="Basic Information"
            status="done"
            path={allDetailsPaths.BASIC_INFO}
          />
          <BasicInfo />
        </Box>

        <Box sx={{ border: "1px solid #ddd", borderRadius: 2, mb: 3 }}>
          <CardComponent
            name="Salary Information"
            status="done"
            path={allDetailsPaths.BASIC_INFO}
          />
          <SalaryIncome />
        </Box>
        <Box sx={{ border: "1px solid #ddd", borderRadius: 2, mb: 3 }}>
          <CardComponent
            name="House Property"
            status="done"
            path={allDetailsPaths.BASIC_INFO}
          />
          <HouseProperty />
        </Box>
        <Box sx={{ border: "1px solid #ddd", borderRadius: 2, mb: 3 }}>
          <CardComponent
            name="Capital Gains"
            status="done"
            path={allDetailsPaths.BASIC_INFO}
          />
          <CapitalGains />
        </Box>
        <Box sx={{ border: "1px solid #ddd", borderRadius: 2, mb: 3 }}>
          <CardComponent
            name="Business / Professional Income"
            status="done"
            path={allDetailsPaths.BASIC_INFO}
          />
          <ProfessionalIncome />
        </Box>

        <Box sx={{ border: "1px solid #ddd", borderRadius: 2, mb: 3 }}>
          <CardComponent
            name="Other Sources"
            status="done"
            path={allDetailsPaths.BASIC_INFO}
          />
          <OtherSources />
        </Box>
      </Box>
    </Box>
  );
}
