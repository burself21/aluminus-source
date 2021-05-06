import React from 'react';

import styles from './StudentProfile.module.css';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

import face1 from './face1.svg';

import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        border: "1.7px solid #C4C4C4",
    }
}))
const StudentProfile = (props) => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.root}>
            <div className={styles.photo_container}> 
                <img src={face1} alt="" className={styles.photo} />
                <h4 className={styles.name}> 
                    {props.name}
                    <hr className={styles.divider} /> 
                </h4>          
            </div>
            <div className={styles.info_container}> 
                <p className={styles.info}>
                    <span className={styles.info_header}>
                        Major{ props.majors.length > 1 ? "s" : "" }: 
                    </span>
                    <span> { props.majors.join(', ') }</span>
                </p>
                <p className={styles.info}>
                    <span className={styles.info_header}>
                        Academic year: 
                    </span>
                    <span> {props.year}</span>
                </p>

                {props.firstGen && 

                <p className={styles.info}>
                    <span className={styles.info_header}>
                        Student background: 
                    </span>
                    <span> First-gen</span>
                </p>
                }
            </div>
            <div className={styles.support_left}>
                <div className={styles.support_main}>
                    <a href="/adjust-support"> 
                    <p className={styles.support_amount}>${props.support}</p>
                    <p className={styles.support_text}>Monthly Support</p>
                    <p className={styles.adjust_text}>Click to adjust</p>
                    </a>
                </div>
            </div>
            <div className={styles.support_right}>
                <div className={styles.support_main}>
                    <p className={styles.support_duration}>{props.monthsSupported} month</p>
                    <p className={styles.support_text}>Support Duration</p>
                </div>
            </div>
            <div style={{clear: "both"}} />
            
            
        </Card>
    )
}

export default StudentProfile;