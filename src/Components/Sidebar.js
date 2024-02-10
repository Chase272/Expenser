import React, { useState } from "react";
import { List, ListItem, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";

function Sidebar() {
  const [selected, setSelected] = useState("Dashboard");

  const handleListItemClick = (event, index) => {
    setSelected(index);
  };

  return (
    <List
      sx={{
        backgroundColor: "",
        width: "100%",
        padding: "10px",
      }}
    >
      {[
        { name: "Dashboard", path: "/" },
        { name: "Transactions", path: "/transactions" },
        { name: "Settings", path: "/settings" },
      ].map((item, index) => (
        <ListItem key={item.name}>
          <ListItemButton
            component={Link}
            to={item.path}
            selected={selected === item.name}
            onClick={(event) => handleListItemClick(event, item.name)}
          >
            {item.name}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default Sidebar;
