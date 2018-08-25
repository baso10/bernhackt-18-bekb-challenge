import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import withRoot from "./withRoot";

import { Divider, List, ListItem, TextField } from "@material-ui/core";

import CreatableSelect from "react-select/lib/Creatable";
import { alert } from "./Utils/Alerts";
import Select from "./components/Select";

class Orderscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //label: "Beispielprodukt", value:"Beispielprodukt"
      productList: [],
      lastproductInvoice: [],
      productInvoice: [],
      exampleInvoice: [],
      inputValue: ""
    };

    //TODO: this.getLastOrders();
  }

  componentDidMount() {}

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

  //TODO: Tabs Layout and Code Refactoring FIX
  productListRender = () => {
    const that = this;
    if (this.state.productInvoice.length !== 0) {
      return this.state.productInvoice.map(function(product, index) {
        return (
          <ListItem key={index}>
            <TextField type="text" value={product.count} />
            <TextField type="text" value={product.name} />
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

  addItemToList = newItem => {
    console.log(newItem);
    alert("Menge für " + newItem.name, "Anzahl | Stunden | Stück")
      .then(result => {
        if (result.value) {
          newItem.count = result.value;
          this.setState(curState => ({
            productInvoice: [...curState.productInvoice, newItem]
          }));
        }
      })
      .then(console.log(this.state.productList));
  };

  render() {
    return (
      <div>
        <div>
          <Typography variant="subheading">
            Kunde / Leistung hinzufügen
          </Typography>
          <Select addItem={this.addItemToList} />
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
              <List className="productList">{this.productListRender()}</List>
            </Paper>
          </Grid>
        </Grid>
        <div id="bottomBar">
          <Button
            color="secondary"
            variant="outlined"
            onClick={this.clearProductList}
          >
            Rechnung zurücksetzten
          </Button>
          <Button color="primary" variant="outlined" onClick={this.sendInvoice}>
            Speichern
          </Button>
          <Button color="primary" variant="outlined" onClick={this.sendInvoice}>
            PDF Export
          </Button>
          <Button color="primary" variant="outlined" onClick={this.sendInvoice}>
            Senden / IaaS
          </Button>
        </div>
      </div>
    );
  }
}

export default withRoot(Orderscreen);
