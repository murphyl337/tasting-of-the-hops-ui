import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ExpansionPanelSummary, ExpansionPanel, Typography, ExpansionPanelDetails } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons'
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    width: 300,
    maxWidth: 300,
    width: 'auto',
    tableLayout: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      maxWidth: '100%'
    },
  }
});

class BeerTable extends React.Component {
  render() {
    const { classes } = this.props;
    const { beers } = this.props;

    return (
      <div>
        {beers.beers.map(beer => {
          return (
            <ExpansionPanel key={beer.id}>
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Typography className={classes.heading}>{beer.name}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <p> {beer.submitter} </p>
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

const mapStateToProps = (state) => state.beers
const ConnectedBeerTable = connect(mapStateToProps)(BeerTable)

export default withStyles(styles)(ConnectedBeerTable);