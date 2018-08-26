import React from "react";
import "chartjs-plugin-annotation";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CustomizedSnackbar from "../components/Notifications";
import Grid from "@material-ui/core/Grid";
import CashFlowChart from "../components/CashFlowChart";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ margin: 1 + "em" }}>
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <CashFlowChart />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid item xs={12}>
              <Paper className={classes.root} elevation={1} square={true}>
                <Typography variant="headline" component="h3">
                  Glückwunsch! Nächstes Level erreicht!
                </Typography>
                <Typography component="p">
                  <b
                    style={{
                      display: "block",
                      fontSize: "2em",
                      marginTop: " 0.67em",
                      marginBottom: "0.67em",
                      marginLeft: 0,
                      marginRight: 0,
                      fontWeight: "bold"
                    }}
                  >
                    16
                  </b>
                  Mit diesem Level hast du einen besseren Zinssatz.
                  <br />
                  <br />
                  <Button variant="contained" color="primary">
                    Geld ausleihen
                  </Button>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "1em" }}>
              <Paper className={classes.root} elevation={1} square={true}>
                <Typography variant="headline" component="h3">
                  Das Geld wird langsam knapp!
                </Typography>
                <Typography component="p">
                  Hast du alle Rechnungen diesen Monat ausgestellt?
                  <br />
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/invoices"
                  >
                    Neue Rechnung
                  </Button>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <CustomizedSnackbar />
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
