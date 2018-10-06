import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        color: 'white',
        background: '#18453B',
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

class SignUpButton extends React.Component {
    render() {
        const { classes, onClick } = this.props;
        return (
            <Button onClick={onClick} variant="contained" className={classes.button}>
                <AddIcon className={classes.leftIcon} />
                Sign Up
            </Button>
        );
    };
}

SignUpButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpButton);