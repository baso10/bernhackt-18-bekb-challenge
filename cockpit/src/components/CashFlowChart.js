import React from "react";
import moment from "moment";
import chartData from "../mockData/chartData";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-annotation";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class CashFlowChart extends React.Component {
  render() {
    var labels = [];
    var data = [];
    var dataForecast = [];
    chartData.map(val => {
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
      return val;
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
      <Paper className={classes.paper} elevation={1} square={true}>
        <Line data={cfg} options={opts} />
      </Paper>
    );
  }
}

CashFlowChart.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CashFlowChart);
