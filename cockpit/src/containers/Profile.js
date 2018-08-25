import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    },
  chip: {
    margin: theme.spacing.unit,
  },
  });

class Profile extends React.Component {

  render() {
    return (
            <div>
              <h1>Wilkommen Herr Bänz</h1>
            
              <div><i class="fas fa-trophy fa-2x"></i> You are on level 
            <Chip color="primary" className="chip"  label="16"  />
            <ul>
              <li>4% interest rate</li>
              <li>Silver level support</li>
              <li>Gutschein für personal beratung</li>
            </ul>
            <hr/>
                <div>
                
    <h2>Unlocked achivements</h2>
                <div className="root">
                <Chip
        label="Monthly revenue +10k"
        avatar={<Avatar>10+</Avatar>}
        className="chip"
        color="primary"
      />
      
      <Chip color="primary" className="chip" label="Created 50 invoices"  avatar={<Avatar>50</Avatar>} />
                  <Chip color="primary" className="chip" label="Paid 100 bills on time" avatar={<Avatar>100</Avatar>}  />


      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Clickable Chip"
        
        className="chip"
      />
      <Chip
        label="Deletable Chip"
        
        className="chip"
      />
      <Chip
        label="Clickable Deletable Chip"
        
        
        className="chip"
      />
      <Chip
        label="Custom delete icon Chip"
        
        
        className="chip"
      />
      <Chip
        label="Clickable Link Chip"
        className="chip"
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Clickable Link Chip"
        clickable
        className="chip"
        color="primary"
        
        deleteIcon={<DoneIcon />}
      />
      
    </div>
                  
                </div>
        
        <hr/>
        <h4>Benefits when reaching level <Chip color="primary" className="chip"  label="17"  /></h4>
        
        <ul>
              <li>3,5% interest rate</li>
              <li>Gold level support</li>
            </ul>
            
            <h2>Locked achivements</h2>
                <div className="root">
                <Chip
        label="Monthly revenue +20k"
        avatar={<Avatar>20+</Avatar>}
        className="chip"
        color="primary"
      />
      
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Clickable Chip"
        
        className="chip"
      />
      
            </div>
            <br/>
            <br/>
            <br/>
              </div>
            </div>
            );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
