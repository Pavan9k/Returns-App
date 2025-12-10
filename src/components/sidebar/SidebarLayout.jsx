import { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  AppBar,
  Toolbar,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { paths } from "../paths/pathConstants";

const drawerWidth = 240;

export default function SidebarLayout({ children }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen((o) => !o);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      {/* Top bar with menu button */}
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar drawer */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            mt: "64px", // offset for AppBar height (default MUI AppBar height)
          },
        }}
      >
        <List>
          <ListItemButton
            onClick={() => {
              navigate(paths.USER_CREATION);
              toggleDrawer();
            }}
          >
            <ListItemText primary="Create User" />
          </ListItemButton>
        </List>
        <List>
          <ListItemButton
            onClick={() => {
              navigate(paths.EDIT_USER);
              toggleDrawer();
            }}
          >
            <ListItemText primary="Edit User" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* Page content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
