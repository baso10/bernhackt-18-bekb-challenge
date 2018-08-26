import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CreatableSelect from "react-select/lib/Creatable";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class CustomerSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: []
    };
  }

  componentWillMount() {}

  render() {
    const { classes } = this.props;

    return <div className={classes.root} />;
  }
}

CustomerSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRoot(CustomerSelect));
