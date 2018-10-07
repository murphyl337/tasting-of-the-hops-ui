import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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

  toggleBeer() {
    alert('hi Chelsea!')
  }

  render() {
    const { classes } = this.props;
    const { beers } = this.state

    return (
      <Table fixedHeader={false} className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Beer Name</TableCell>
              <TableCell className={classes.tableCell} numeric>Brewery</TableCell>
              <TableCell className={classes.tableCell} numeric>Submitter</TableCell>
              <TableCell className={classes.tableCell} numeric>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {beers.beers.map(beer => {
              return (
                <TableRow key={beer.id}>
                  <TableCell className={classes.tableCell} component="th" scope="row">
                    {beer.name}
                  </TableCell>
                  <TableCell className={classes.tableCell} numeric>{beer.brewery}</TableCell>
                  <TableCell className={classes.tableCell} numeric>{beer.submitter}</TableCell>
                  <TableCell className={classes.tableCell} numeric>{beer.rating}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
    );
  }
}

BeerTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ConnectedBeerTable = connect(state => ({
  beers: state.beers
}))(BeerTable)

export default withStyles(styles)(ConnectedBeerTable);