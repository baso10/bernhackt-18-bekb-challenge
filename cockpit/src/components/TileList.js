import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

export const listItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ReceiptIcon />
      </ListItemIcon>
      <ListItemText primary="Invoices" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <ListItemText primary="My Cashflow" />
    </ListItem>
  </div>
);
