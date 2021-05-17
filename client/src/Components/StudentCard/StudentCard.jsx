import React from 'react';

import styles from './StudentCard.module.css';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';

import SupportBar from '../../Components/SupportBar/SupportBar';

import face1 from './face1.svg';

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        border: "1.7px solid #C4C4C4",
        borderRadius: "10px",
        paddingBottom: "20px",
        paddingTop: "14px"
    }
}));


const StudentCard = (props) => {
    const classes = useStyles();

    const infoHeaders = [];
    if (props.year)
        infoHeaders.push(props.year);
    if (props.firstGen)
        infoHeaders.push("First-gen");
    if (props.majors.length > 0 && props.majors[0] !== "Undeclared")
        infoHeaders.push(...props.majors);

    return (
        <Link className={styles.outerLink} to={`/support-student/${props.id}`}>
            <Card variant="outlined" className={classes.root}>
                <div className={styles.info}>
                    <div className={styles.photoContainer}>
                        <img src={face1} alt="" className={styles.photo} />
                        <figcaption className={styles.name}>{props.name}</figcaption>
                    </div>
                    <div className={styles.headerContainer}>
                        {infoHeaders && [...Array(infoHeaders.length).keys()].map(id => 
                            <div className={styles.infoBubble}>
                                {infoHeaders[id]}
                            </div>
                        )}
                    </div>
                    <div style={{clear: "both"}} />
                </div>
                
                <hr className={styles.divider} /> 
                <p className={styles.bioPreview}>
                    {props.bio}
                </p>
                <p className={styles.supportText}>
                    <span>${props.support}</span> of ${props.need} monthly need funded
                </p>
                <div className={styles.supportBarContainer}>
                    <SupportBar 
                        support={props.support} 
                        need={props.need} 
                    />
                </div>

            </Card>
        </Link>
    )
}

export default StudentCard;