import {
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const buttonStyle = {
  borderBottom: "1px solid gray",
};

function Dashboard() {
  return (
    <List
      sx={{
        backgroundColor: "",
        width: "100%",
      }}
    >
      <ListItem>
        <ListItemButton sx={buttonStyle} selected>
          Dashboard
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton sx={buttonStyle}>Transactions</ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton sx={buttonStyle}>Settings</ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton sx={buttonStyle}>Sign Out</ListItemButton>
      </ListItem>
    </List>
  );
}

export default Dashboard;
