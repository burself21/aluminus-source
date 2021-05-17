import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 9,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: 'rgba(201, 24, 24, 0.5)'
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#C91818',
    },
}))(LinearProgress);

const SupportBar = (props) => {
    return (
        <BorderLinearProgress variant="determinate" value={100 * props.support / props.need} />
    )
};

export default SupportBar;