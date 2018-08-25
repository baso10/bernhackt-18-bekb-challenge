import React from "react";
import moment from "moment";
import chartData from "../mockData/chartData";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-annotation";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import CustomizedSnackbar from "../components/Notifications";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Dashboard extends React.Component {
  render() {
    var labels = [];
    var data = [];
    var dataForecast = [];
    chartData.map(val => {
      console.log(val);
      if (val.forecast) {
        dataForecast.push({
          t: moment(val.time, "DD.MM.YYYY"),
          y: val.forecast
        });
      }
      if (val.actual) {
        data.push({
          t: moment(val.time, "DD.MM.YYYY"),
          y: val.actual
        });
      }
      labels.push(moment(val.time, "DD.MM.YYYY"));
      console.log(moment(val.time, "DD.MM.YYYY"));
    });

    let color = "rgba(204, 0, 51, 1)";
    let colorForeccast = "rgba(136, 128, 103, 1)";
    var date = moment();

    var opts = {
      scales: {
        xAxes: [
          {
            type: "time",
            distribution: "series",
            //                  ticks: {
            //                    source: 'labels'
            //                  },
            time: {
              unit: "month"
            }
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Betrag (CHF)"
            }
          }
        ]
      },
      annotation: {
        annotations: [
          {
            type: "line",
            mode: "vertical",
            scaleID: "x-axis-0",
            value: date,
            borderColor: "red",
            label: {
              content: "TODAY",
              enabled: true,
              position: "top"
            }
          }
        ]
      }
    };

    var cfg = {
      labels: labels,
      datasets: [
        {
          label: "Cashflow",
          data: data,
          type: "line",
          pointRadius: 0,
          fill: false,
          borderColor: color,
          borderWidth: 2,
          backgroundColor: color
        },
        {
          label: "Prediction",
          data: dataForecast,
          type: "line",
          pointRadius: 0,
          fill: false,
          borderColor: colorForeccast,
          borderWidth: 2,
          backgroundColor: colorForeccast
        }
      ]
    };

    const { classes } = this.props;
    return (
      <div>
        <h2>Dashboard</h2>
        <Line data={cfg} options={opts} plugins />
        <div>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              You are running out of cash!
            </Typography>
            <Typography component="p">
              Did you issue all invoices this month?{" "}
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
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              You are running out of cash!
            </Typography>
            <Typography component="p">
              You are level <b>16</b>. We trust you and can offer you loan to
              get you over this month.{" "}
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/invoices"
              >
                Lend me money
              </Button>
            </Typography>
          </Paper>

          <CustomizedSnackbar />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
