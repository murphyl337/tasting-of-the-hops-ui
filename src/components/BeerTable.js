import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

function SimpleTable(props) {
  const { classes, beers } = props;

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

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);