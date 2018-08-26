import React from "react";
import CreatableSelect from "react-select/lib/Creatable";
import withRoot from "../withRoot";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  _handleChange = (newValue, actionMeta) => {
    console.log("OK");
    console.log(newValue);
    var newItem = {
      ID: 0,
      label: "",
      value: "",
      rate: 0,
      hourly: []
    };

    if (newValue.length !== 0) {
      this.setState({ inputValue: newValue });
      newItem.id = newValue.id;
      newItem.name = newValue.label;
      newItem.rate = newValue.rate;
      newItem.value = newValue.value;
      //var tempList = this.state.productInvoice;
      this.props.addItem(newItem);
    }
  };

  render = () => {
    return (
      <CreatableSelect
        autoFocus
        isClearable
        onChange={this._handleChange}
        value={this.state.inputValue}
        placeholder={this.props.placeholder}
        options={this.props.inputList}
      />
    );
  };
}

export default withRoot(Select);
