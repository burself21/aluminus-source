import React from 'react';

import styles from './StudentContainer.module.css';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import StudentProfile from '../../Components/StudentProfile/StudentProfile';

const useStyles = makeStyles(theme => ({
    item: {
        maxWidth: "100%",
        ["@media (min-width:961px)"]: {
            maxWidth: "45%",
        },

        '&:nth-of-type(odd)': {

        },
        '&:nth-of-type(even)': {
            
        }
    }
}));

const StudentContainer = (props) => {
    const classes = useStyles();
    const isMobile = useMediaQuery("@media (max-width:960px)");
    const studentsPerRow = isMobile ? 1 : 2;
    const numStudents = props.students.length;
    const studentGridArray = isMobile ? [...Array(numStudents).keys()].map(id => [id]) : [...Array(Math.round(numStudents / 2)).keys()].map(i => 2 * i + 1 < numStudents ? [2 * i, 2 * i + 1] : [2 * i]);
    console.log(studentGridArray);
    return (
        <div className={styles.root}> 
            <p className={styles.header}>
                {props.header}
            </p>
            <hr className={styles.divider} />
            <Grid container className={classes.container} direction="column" spacing={3}>
                {props.students && [...Array(studentGridArray.length).keys()].map(id => 
                    <Grid item container xs={12} className={classes.row} direction="row" key={id} justify="space-between" alignItems="center">
                        {studentGridArray[id] && studentGridArray[id].map(i => 
                            <Grid item xs={12 / studentsPerRow} className={classes.item} 
                            key={i}> 
                                <StudentProfile 
                                    {...props.students[i]}
                                />
                            </Grid>
                        )}
                        
                    </Grid>
                    )}
                    
            </Grid>
        </div>
    )
}  

export default StudentContainer;