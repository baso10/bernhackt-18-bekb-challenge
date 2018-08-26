import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3
  },
  chip: {
    margin: theme.spacing.unit
  }
});

class Profile extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ margin: 1 + "em" }}>
        <Grid container spacing={24} justify="center" alignItems="center">
          <Grid item xs={12} sm={8}>
            <Paper className={classes.root}>
              <h1>Hoi Bänz</h1>
              <i class="fas fa-trophy fa-2x" /> Du bist Level
              <Chip color="primary" className="chip" label="16" />
              <h3>Deine Benefits</h3>
              <ul>
                <li>Nur 4% Zinsrate auf Überzüge</li>
                <li>BEKB Silberklub Mitgliedschaft</li>
                <li>Gutschein für eine persönliche Beratung</li>
              </ul>
            </Paper>
            <Paper className={classes.root}>
              <div>
                <h2>Freigeschaltene Auszeichnungen</h2>
                <div className="root">
                  <Chip
                    label="Monatlicher Umsatz +10k"
                    avatar={<Avatar>10+</Avatar>}
                    className="chip"
                    color="primary"
                  />

                  <Chip
                    color="primary"
                    className="chip"
                    label="Rechnungen ausgestellt"
                    avatar={<Avatar>50</Avatar>}
                  />
                  <Chip
                    color="primary"
                    className="chip"
                    label="Rechnungen rechtzeitig bezahlt"
                    avatar={<Avatar>100</Avatar>}
                  />
                  <Chip
                    color="primary"
                    className="chip"
                    label="Geld für Mikrokredite zur Verfügung gestellt"
                    avatar={<Avatar>1x</Avatar>}
                  />
                  <Chip
                    color="primary"
                    className="chip"
                    label="Login bei E-Banking"
                    avatar={<Avatar>1</Avatar>}
                  />

                  <Chip
                    color="primary"
                    className="chip"
                    label="Mal via E-Rechnung bezahlt"
                    avatar={<Avatar>10</Avatar>}
                  />
                </div>
              </div>
            </Paper>
            <Paper className={classes.root}>
              <h2>Freigeschaltene Auszeichnungen</h2>
              Benefits beim nächsten Level{" "}
              <Chip color="primary" className="chip" label="17" />
              <ul>
                <li>3,5% Zinsrate</li>
                <li>BEKB Goldklub Mitgliedschaft</li>
                <li>4x Tickets für Thunerseespiele</li>
              </ul>
              <h2>Noch nicht freigeschaltet</h2>
              <div className="root">
                <Chip
                  label="Monatlicher Umsatz +20k"
                  avatar={<Avatar>20+</Avatar>}
                  className="chip"
                  color="primary"
                />
                <Chip
                  color="primary"
                  className="chip"
                  label="Rechnungen rechtzeitig bezahlt"
                  avatar={<Avatar>500</Avatar>}
                />
                <Chip
                  color="primary"
                  className="chip"
                  label="Mal via E-Rechnung bezahlt"
                  avatar={<Avatar>100</Avatar>}
                />
              </div>
              <br />
              <br />
              <br />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
