import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ExpansionPanelSummary, ExpansionPanel, Typography, ExpansionPanelDetails } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import BusinessIcon from '@material-ui/icons/Business'
import PersonIcon from '@material-ui/icons/Person'
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDown'
import ListItemText from '@material-ui/core/ListItemText';
import { ExpandMore } from '@material-ui/icons'
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

class BeerTable extends React.Component {
  render() {
    const { classes } = this.props;
    const { beers } = this.props;

    return (
      <div>
        {beers.map(beer => {
          return (
            <ExpansionPanel key={beer.id}>
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Typography className={classes.heading}>{beer.name}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <List dense={false}>
                  <ListItem>
                      <BusinessIcon>
                      </BusinessIcon>
                        <ListItemText primary={beer.brewery}/>
                  </ListItem>
                  <ListItem>
                      <PersonIcon>
                      </PersonIcon>
                        <ListItemText primary={beer.submitter}/>
                  </ListItem>
                  <ListItem>
                      <ThumbsUpDown>
                      </ThumbsUpDown>
                        <ListItemText primary={beer.rating}/>
                  </ListItem>
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        })}
      </div>
    )
  }
}

BeerTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => state
const ConnectedBeerTable = connect(mapStateToProps)(BeerTable)

export default withStyles(styles)(ConnectedBeerTable);