import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BeerSubmission from '../components/BeerSubmission';

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
    const { beers } = this.props;

    return (
      <div>
        {beers.map(beer => {
          return (
            <BeerSubmission key={beer.id} beer={beer}></BeerSubmission>
          )
        })}
      </div>
    )
  }
}

BeerTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ConnectedBeerTable = connect((state) => state)(BeerTable)
export default withStyles(styles)(ConnectedBeerTable);