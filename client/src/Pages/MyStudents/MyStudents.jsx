import React from 'react';

import styles from './MyStudents.module.css';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import MainNav from '../../Components/Navbar/MainNav';

import students from './students.js';

import StudentBubble from '../MyStudents/Components/StudentBubble/StudentBubble';
import StudentContainer from '../MyStudents/Containers/StudentContainer/StudentContainer';


const useStyles = makeStyles(() => ({
    addStudentButton: {
        color: "#C91818",
        border: "2px solid #CA2C2C",
        fontWeight: 600,
        fontFamily: "'Inter', sans-serif",
        textTransform: "none",
        fontSize: "calc(5.35px + 0.692vw)",

        ["@media (min-width:1250px)"]: {
            fontSize: "14px"
        }
    },

    addStudentContainer: {
        textAlign: "center",
        border: "2px solid #C4C4C4",
        borderRadius: "6px",
        padding: "15px",
        marginBottom: "60px",

        '& p': {
            marginTop: 0,
            fontWeight: 500,
            fontSize: "calc(8.07px + 0.409vw)",
            ["@media (min-width:1450px)"]: {
                fontSize: "14px"
            }
        }
    },

    graduateContainer: {
        border: "2px solid #C4C4C4",
        borderRadius: "6px",
        padding: "20px 6%",
        textAlign: "center",
        width: "50%!important",

        minHeight: "450px",

        '& > p': {
            fontSize: "calc(7.1px + 0.6135vw)",
            fontWeight: 600,
            marginBottom: "20px",
            width: "100%",
            margin: "0 auto"
        },

        ["@media (min-width:1200px)"]: {
            width: "80%",
        }, 

        ["@media (min-width:1450px)"]: {
            '& > p': {
                fontSize: "16px",
            }
        }
    }

}));

const MyStudents = () => {
    const classes = useStyles();

    const { 

        current : currentStudents, 
        former : formerStudents, 
        graduated : graduates 

    } = students;

    return (
        <React.Fragment> 
            <MainNav />
            <div id={styles.container}>
                <div id={styles.content}>
                    <div id={styles.left}>
                        <StudentContainer students={currentStudents} header={"Your Current Students"} gray={false} />
                        <StudentContainer students={formerStudents} header={"Support History"} gray={true} />
                    </div>
                    <div id={styles.right}>
                        <div id={styles.right_content}>
                            <Card variant="outlined" className={classes.addStudentContainer}>
                                <p>Want to support another student?</p>
                                <Button variant="outlined" className={classes.addStudentButton} href="/find-students">
                                    Support a new student
                                </Button>
                            </Card>
                            <Card variant="outlined" className={classes.graduateContainer}>
                                <p>Students who graduated with your support</p>
                                {graduates && [...Array(graduates.length).keys()].map(id => 
                                    <StudentBubble
                                        key={id} 
                                        {...graduates[id]}
                                    />
                                )}
                            </Card>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MyStudents;