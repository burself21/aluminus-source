import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import styles from './Support.module.css';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    support_button: {
        ["@media (min-width:320px)"]: {
            fontSize: "calc(12px + 1.25vw)"
        },

        ["@media (min-width:961px)"]: {
            fontSize: "24px"
        },
        fontWeight: "bold",
        textTransform: "none",
        fontFamily: "'Inter', sans-serif",
        color: "white",
        backgroundColor: "#DB0202",
        '&:hover': {
            backgroundColor: "#D7143C"
        },
        
        borderRadius: "10px",
        position: "relative",
        margin: 0,
        left: "50%",
        msTransform: "translateX(-50%)",
        transform: "translateX(-50%)"
    }
}));

const Support = () => {
    const classes = useStyles();

    return (
        <div id={styles.container}>
            <div id={styles.content}>
                <h2 id={styles.header}>
                Become a supporting donor and start helping students from your Alma Mater.
                </h2>
                <Button variant="contained" color="secondary" size="large" className={classes.support_button} href="/signup">
                    Start supporting
                </Button>
            </div>
        </div>
    );
}

export default Support;