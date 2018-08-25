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
    var newItem = {
      name: ""
    };

    if (newValue.length !== 0) {
      this.setState({ inputValue: newValue });
      newItem.name = newValue.label;
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
