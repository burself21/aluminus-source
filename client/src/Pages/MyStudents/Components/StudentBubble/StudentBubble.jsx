import React from 'react';

import styles from './StudentBubble.module.css';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

import face1 from './face1.svg';

const useStyles = makeStyles(() => ({
    root: {
        height: "5.17vw",
        width: "calc(100% - 2px)",
        border: "1px solid #484848",
        borderRadius: "40px",
        textAlign: "left",
        display: "flex",
        alignItems: "center",

        '& p': {
            fontWeight: 500,
            fontSize: "calc(6.1px + 0.613vw)",
            ["@media (min-width:1450px)"]: {
                fontSize: "15px"
            },
            marginRight: '8%'
        },

        ["@media (min-width:1450px)"]: {
            height: "75px"
        }
    },
    

}));

const StudentBubble = (props) => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.root}>
            <div className={styles.image_container}> 
                <img src={face1} alt="" className={styles.image} />
            </div>
            <p>{props.name}</p>
        </Card>
    );
}

export default StudentBubble;