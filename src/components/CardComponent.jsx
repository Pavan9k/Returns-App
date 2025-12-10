import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";
import { paths } from "./paths/pathConstants";

export function CardComponent({ name, status = "", path = "" }) {
  const navigate = useNavigate();

  // const handleCardClick = () => {
  //   // Join USER_CREATION and path safely
  //   const targetPath = [paths.USER_CREATION, path].filter(Boolean).join("/");
  //   navigate(`/${targetPath}`);
  // };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minWidth: 250,
        p: 1.5,
        mb: 1,
       
        borderRadius: 2,
        boxShadow: 1,
        backgroundColor: "background.paper",
        cursor: "pointer",
        "&:hover": { boxShadow: 3 },
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" noWrap>
        {name}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        {status ? (
          status === "done" || status === "completed" ? (
            <>
              <CheckCircleIcon color="success" sx={{ mr: 0.5 }} />
              <Typography color="textSecondary" variant="body2">
                Done
              </Typography>
            </>
          ) : status === "pending" ? (
            <>
              <AccessTimeIcon color="warning" sx={{ mr: 0.5 }} />
              <Typography color="textSecondary" variant="body2">
                Pending
              </Typography>
            </>
          ) : null
        ) : null}
      </Box>
    </Box>
  );
}
