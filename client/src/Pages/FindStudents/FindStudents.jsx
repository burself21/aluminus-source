import React from 'react';

import styles from './FindStudents.module.css';

import { makeStyles } from '@material-ui/core/styles';

// components
import MainNav from '../../Components/Navbar/MainNav';

import SearchIcon from '@material-ui/icons/Search';

import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import berkeley from './berkeley.svg';
import search from './search.svg';

import StudentCard from '../../Components/StudentCard/StudentCard';

import students from './students';

const partition = (arr, n) =>  {
    /* arr is the array being paritioned, n is the size of each subset */
    const partitioned = [];
    for (let i = 0; i < arr.length; i += n) {
        partitioned.push(arr.slice(i, i + n));
    }
    return partitioned;
}

const useStyles = makeStyles(() => ({
    item: {
        maxWidth: "100%",
        ["@media (min-width:700px)"]: {
            maxWidth: "45%",
        },
        ['@media (min-width:1150px)']: {
            maxWidth: "28%"
        }
    }
}));

const FindStudents = (props) => {
    const classes = useStyles();
    const lg = useMediaQuery('@media (min-width:1150px)');
    const md = useMediaQuery('@media (min-width:700px)');
    const numColumns = lg ? 3 : md ? 2 : 1 ;
    const studentArr = partition([...students.current, ...students.current, students.current[0]], numColumns);
    console.log(studentArr);

    return (
        <React.Fragment>
            <MainNav />
            <div id={styles.container}>
                <div id={styles.content}>
                    <div id={styles.info}>
                        <img src={berkeley} alt="" />
                        <p> Find Students </p>
                        <p> Discover students from your alma mater who need your help.</p>
                        <div style={{clear: "both"}} />
                    </div> 
                    <div id={styles.categories}>
                        <p>Categories {/**<img src={search} alt=""/> */} <SearchIcon />
                        </p>
                    </div>
                    <Grid container className={classes.studentContainer} spacing={6}>
                        {studentArr && [...Array(studentArr.length).keys()].map(id => 
                            <Grid item container xs={12} className={classes.row} justify="space-between" alignItems="center" key={id}>
                                {studentArr[id] && [...Array(studentArr[id].length).keys()].map(i => 
                                    <Grid item xs={12 / numColumns} className={classes.item} key={i}> 
                                        <StudentCard 
                                            {...studentArr[id][i]}
                                        />
                                    </Grid>
                                )}
                            </Grid>
                        )}
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FindStudents;