import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import ExitIcon from "@material-ui/icons/ExitToApp";
import DeleteIcon from "@material-ui/icons/Delete";
import withRoot from "./withRoot";

import {
  Divider,
  List,
  ListItem,
  Tab,
  Tabs,
  TextField
} from "@material-ui/core";

import "./Orderscreen.css";

import CreatableSelect from "react-select/lib/Creatable";
import { orderInput } from "./Utils/Alerts";

class Orderscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //label: "Beispielprodukt", value:"Beispielprodukt"
      productList: [],
      lastProductOrder: [],
      productOrder: [],
      exampleOrder: [
        { name: "Cervelat", count: "100 Paar" },
        { name: "Salatsauce French", count: "3" },
        { name: "Wurstsalat", count: "10 Stück" },
        { name: "Steak vac", count: "20" },
        { name: "Wasser", count: "6" },
        { name: "Bratwurst", count: "12" }
      ],
      inputValue: ""
    };

    //TODO: this.getLastOrders();
  }

  getLastOrders = () => {
    //TODO: Get last Orders and set last as example
  };

  logout = () => {
    this.props.appContext.setState({ token: null });
  };

  loadPreviousOrder = event => {
    //TODO: LOAD from SERVER :)
    const example = this.state.exampleOrder;
    this.setState({
      productOrder: example
    });
  };

  deleteItem = event => {
    const index = event.target.getAttribute("id");
    const tempList = [...this.state.productOrder];
    tempList.splice(index, 1);
    this.setState({ productOrder: tempList });
  };

  clearOrderList = () => {
    this.setState({ productOrder: [] });
  };

  sendOrder = () => {
    console.log("sendOrder");
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
      var tempList = this.state.productOrder;

      orderInput(newProduct, "Menge für ", "Anzahl | Grösse | Gewicht").then(
        result => {
          if (result.value) {
            newProduct.count = result.value;
            tempList.unshift(newProduct);
            this.setState({ productOrder: tempList });
          }
        }
      );
    }
  };
  //TODO: Tabs Layout and Code Refactoring FIX
  productListRender = () => {
    const that = this;
    if (this.state.productOrder.length != 0) {
      return this.state.productOrder.map(function(product, index) {
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
      return (
        <ListItem>Noch keine Produkte auf der nächsten Bestellung....</ListItem>
      );
    }
  };

  render() {
    return (
      <div style={{ display: "inline-block", width: "90%" }}>
        {/* <AppBar position="fixed" style={{ display: "inline-block" }}>
          <div style={{ display: "inline" }}>
            <Button onClick={this.logout}>
              Abmelden <ExitIcon />
            </Button>
          </div>
          <Typography variant="headline" style={{ margin: 10 }}>
            Neue Bestellung | 12345
          </Typography>
        </AppBar> */}
        <div style={{ marginTop: 100 }}>
          <Typography variant="headline">Produkt hinzufügen</Typography>
          <CreatableSelect
            autoFocus
            isClearable
            onKeyDown={this._addProductOnEnter}
            onChange={this._handleChange}
            style={center}
            value={this.state.inputValue}
            placeholder="Produktname | Artikelnummer"
            options={this.state.productList}
          />
        </div>
        <Tabs onChange={this.loadPreviousOrder} style={center}>
          <Tab label="1323" id="11" style={{ margin: "0 auto" }} />
          <Tab label="12091" id="22" style={{ margin: "0 auto" }} />
          <Tab label="13791" id="33" style={{ margin: "0 auto" }} />
        </Tabs>
        <Divider />
        <List className="productList" style={list}>
          {this.productListRender()}
        </List>
        <div id="bottomBar">
          <Button
            color="secondary"
            variant="outlined"
            style={style}
            onClick={this.clearOrderList}
          >
            Bestellung zurücksetzten
          </Button>
          <Button
            color="primary"
            variant="outlined"
            style={style}
            onClick={this.sendOrder}
          >
            Bestellung abschicken
          </Button>
        </div>
      </div>
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

export default withRoot(Orderscreen);
