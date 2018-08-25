import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import ExitIcon from "@material-ui/icons/ExitToApp";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  Divider,
  List,
  ListItem,
  TextField,
  Input
} from "../node_modules/@material-ui/core";

import "./Orderscreen.css";
import products from "./products.json";

import CreatableSelect from "react-select/lib/Creatable";
import { orderInput } from "./Utils/Alerts";

class Orderscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //label: "Beispielprodukt", value:"Beispielprodukt"
      productList: products,
      lastproductInvoice: [],
      productInvoice: [],
      exampleInvoice: [],
      inputValue: ""
    };

    //TODO: this.getLastOrders();
  }

  logout = () => {
    this.props.appContext.setState({ token: null });
  };

  deleteItem = event => {
    const index = event.target.getAttribute("id");
    const tempList = [...this.state.productInvoice];
    tempList.splice(index, 1);
    this.setState({ productInvoice: tempList });
  };

  clearProductList = () => {
    this.setState({ productInvoice: [] });
  };

  sendInvoice = () => {
    console.log("sendInvoice");
  };

  _handleChange = (newValue, actionMeta) => {
    var newProduct = {
      name: "",
      count: ""
    };

    if (newValue.length != 0) {
      this.setState({ inputValue: newValue });
      console.log(newValue);
      console.log(actionMeta);
      newProduct.name = newValue.label;
      var tempList = this.state.productInvoice;

      orderInput(newProduct, "Menge für ", "Anzahl | Stunden | Stück").then(
        result => {
          if (result.value) {
            newProduct.count = result.value;
            tempList.unshift(newProduct);
            this.setState({ productInvoice: tempList });
          }
        }
      );
    }
  };

  customerListRender = () => {
    const that = this;
    if (this.state.productInvoice.length != 0) {
      return this.state.productInvoice.map(function(product, index) {
        return (
          <ListItem key={index}>
            <TextField type="text" value={product.count} />
            <TextField
              type="text"
              value={product.name}
              style={{ width: "50em", marginLeft: 20, paddingRight: 100 }}
            />
            <Button
              id={index}
              variant="fab"
              aria-label="Delete"
              onClick={that.deleteItem}
            >
              <DeleteIcon />
            </Button>
          </ListItem>
        );
      });
    } else {
      return <ListItem>Bitte Kunde auswählen..</ListItem>;
    }
  };
  //TODO: Tabs Layout and Code Refactoring FIX
  productListRender = () => {
    const that = this;
    if (this.state.productInvoice.length != 0) {
      return this.state.productInvoice.map(function(product, index) {
        return (
          <ListItem key={index}>
            <TextField type="text" value={product.count} />
            <TextField
              type="text"
              value={product.name}
              style={{ marginLeft: 20, paddingRight: 50 }}
            />
            <Button
              id={index}
              variant="fab"
              aria-label="Delete"
              onClick={that.deleteItem}
            >
              <DeleteIcon />
            </Button>
          </ListItem>
        );
      });
    } else {
      return <ListItem>Noch keine Leistungen vorhanden</ListItem>;
    }
  };

  render() {
    return (
      <MuiThemeProvider>
        <div style={{ display: "inline-block", width: "90%" }}>
          <AppBar
            position="fixed"
            style={{ display: "inline-block", backgroundColor: "#cc0033" }}
          >
            <div style={{ display: "inline" }}>
              <Button onClick={this.logout}>
                Abmelden <ExitIcon />
              </Button>
            </div>
            <Typography variant="headline" style={{ margin: 10 }}>
              Neue Offerte/Rechnung | 12345
            </Typography>
          </AppBar>
          <div style={{ marginTop: 100 }}>
            <Typography variant="subheading" style={style}>
              Kunde / Leistung hinzufügen
            </Typography>
            <CreatableSelect
              autoFocus
              isClearable
              onKeyDown={this._addProductOnEnter}
              onChange={this._handleChange}
              style={center}
              value={this.state.inputValue}
              placeholder="Kunde | Produkt | Leistung"
              options={this.state.productList}
            />
          </div>
          <Divider />
          <Grid container justify="left" spacing={16}>
            <Grid item>
              <Paper className="customerPaper">
                <div className="inputGroup">
                  <div>
                    <TextField type="text" placeholder="Kundenname" />
                  </div>
                  <div>
                    <TextField type="text" placeholder="Adresse" />
                  </div>
                  <div>
                    <TextField type="text" placeholder="Stadt" />
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className="paper">
                <List className="productList" style={style}>
                  {this.productListRender()}
                </List>
              </Paper>
            </Grid>
          </Grid>
          <div id="bottomBar">
            <Button
              color="secondary"
              variant="outlined"
              style={style}
              onClick={this.clearProductList}
            >
              Rechnung zurücksetzten
            </Button>
            <Button
              color="primary"
              variant="outlined"
              style={style}
              onClick={this.sendInvoice}
            >
              Speichern
            </Button>
            <Button
              color="primary"
              variant="outlined"
              style={style}
              onClick={this.sendInvoice}
            >
              PDF Export
            </Button>
            <Button
              color="primary"
              variant="outlined"
              style={style}
              onClick={this.sendInvoice}
            >
              Senden / IaaS
            </Button>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
const style = {
  margin: 30,
  padding: 10
};

const center = {
  display: "block",
  maxWidth: "500px",
  margin: "auto"
};

const list = {
  overflow: "scroll",
  height: "350px",
  margin: "0 auto"
};

export default Orderscreen;
