import React, { useState } from "react";
import { List, ListItem, ListItemAvatar, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import {
  AutoAwesomeMosaic,
  CallMade,
  CallReceived,
  CompareArrows,
  Settings,
} from "@mui/icons-material";

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleListItemClick = (event, name) => {
    setSelectedItem(name);
    console.log(name);
  };

  return (
    <List
      sx={{
        // backgroundColor: "red",
        width: "100%",
        padding: "20px",
        fontFamily: "Poppins",
      }}
    >
      {[
        {
          name: "Dashboard",
          path: "/dashboard",
          icon: <AutoAwesomeMosaic sx={{ fontSize: 25 }} />,
        },
        {
          name: "Transactions",
          path: "/dashboard/transactions",
          icon: <CompareArrows sx={{ fontSize: 25 }} />,
        },
        {
          name: "Expenses",
          path: "/dashboard/expenses",
          icon: <CallMade sx={{ fontSize: 25 }} />,
        },
        {
          name: "Income",
          path: "/dashboard/income",
          icon: <CallReceived sx={{ fontSize: 25 }} />,
        },
        {
          name: "Settings",
          path: "/dashboard/settings",
          icon: <Settings sx={{ fontSize: 25 }} />,
        },
      ].map((item, index) => (
        <ListItem
          key={item.name}
          sx={{
            fontWeight: 300,
            transition: "background-color 0.2s ease",
            backgroundColor: selectedItem == item.name ? "#5c85e7" : "",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#5c85e7",
              borderRadius: 2,
            },
          }}
        >
          {item.icon}
          <ListItemButton
            component={Link}
            to={item.path}
            onClick={(event) => handleListItemClick(event, item.name)}
            disableRipple
          >
            {item.name}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default Sidebar;
