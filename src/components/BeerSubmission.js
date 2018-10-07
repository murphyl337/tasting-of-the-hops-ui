import React from 'react';
import PropTypes from 'prop-types';
import { ExpansionPanelSummary, ExpansionPanel, Typography, ExpansionPanelDetails } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import BusinessIcon from '@material-ui/icons/Business'
import PersonIcon from '@material-ui/icons/Person'
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDown'
import ListItemText from '@material-ui/core/ListItemText';
import { ExpandMore } from '@material-ui/icons'

class BeerSubmission extends React.Component {
    render() {
        const { beer } = this.props
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Typography>{beer.name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List dense={false}>
                        <ListItem>
                            <BusinessIcon>
                            </BusinessIcon>
                            <ListItemText primary={beer.brewery} />
                        </ListItem>
                        <ListItem>
                            <PersonIcon>
                            </PersonIcon>
                            <ListItemText primary={beer.submitter} />
                        </ListItem>
                        <ListItem>
                            <ThumbsUpDown>
                            </ThumbsUpDown>
                            <ListItemText primary={beer.rating} />
                        </ListItem>
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

BeerSubmission.propTypes = {
    beer: PropTypes.object.isRequired,
};

export default BeerSubmission