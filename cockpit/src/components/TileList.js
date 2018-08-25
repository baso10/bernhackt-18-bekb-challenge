import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { Link } from "react-router-dom";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

export const menuItems = (
  <div>
    <ListItem button component={Link} to="/invoices">
      <ListItemIcon>
        <ReceiptIcon />
      </ListItemIcon>
      <ListItemText>Invoices</ListItemText>
    </ListItem>
    <ListItem button component={Link} to="/mycashflow">
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <ListItemText primary="My Cashflow" />
    </ListItem>
  </div>
);
