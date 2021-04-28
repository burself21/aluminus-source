import React from 'react';

import styles from './HowItWorks.module.css';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import funding from './funding.svg';
import student from './student.svg';
import updated from './updated.svg';
import arrow from './arrow.svg';

const useStyles = makeStyles(theme => ({
    learn_button: {
        fontSize: "18px",
        textTransform: "none",
        fontWeight: "bold",
        color: "#6C5CE7",
        borderColor: "#ADADAD",
        borderRadius: "15px",
        fontFamily: "'Inter', sans-serif"
        
    },

}));

const infoBox = (icon, header, text, classes) => {
    return (
        <Box display="flex" alignItems="center" flexDirection="column" textAlign="center" width={270}>
            <img src={icon} alt="" height="70" width="70" />
            <h3 className={styles.box_header}>{header}</h3>
            <h4 className={styles.box_description}>{text}</h4>
            <div className={styles.learn_button_container}> 
                {/*<Button size="large" variant="outlined" className={classes.learn_button}> 
                    Learn more
                </Button> */}
            </div>
        </Box>
    );
}

const HowItWorks = React.forwardRef((props, ref) => {

    const classes = useStyles();

    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.content}>
                <div className={styles.header_container}>
                    <h2> How Aluminus Works </h2>
                </div>

                <div id={styles.info_container}>
                    {infoBox(student, "Find a Student", "Browse through students with financial need from your alma mater and find students you would like to lend your monthly support to.", classes)}
                    <img src={arrow} width="38" height="23" alt="arrow" />
                    {infoBox(funding, "Provide Funding", "Support a student with $5, $10, or more funds that you specify. The funds will go directly to the students’ university account at the beginning of each month.", classes)}
                    <img src={arrow} width="38" height="23" alt="arrow" />
                    {infoBox(updated, "Stay Updated", "Receive updates every month about the funded students’ university progress and the impact of your genersity on the student.", classes)}
                </div>

                
            </div>
        </div>
    )
});

export default HowItWorks;