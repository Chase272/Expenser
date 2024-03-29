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
  const [selected, setSelected] = useState("Dashboard");

  const handleListItemClick = (event, index) => {
    setSelected(index);
  };

  return (
    <List
      sx={{
        // backgroundColor: "red",
        width: "70%",
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
            "&:hover": {
              color: "#4C4CFD",
            },
            color: selected === item.name ? "#2700c8" : "inherit", // Change color property based on selected item
          }}
        >
          {item.icon}
          <ListItemButton
            component={Link}
            to={item.path}
            onClick={(event) => handleListItemClick(event, item.name)}
            sx={{
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            {item.name}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default Sidebar;
