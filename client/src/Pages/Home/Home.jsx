import React, { useRef, useEffect, useState } from 'react';

import styles from './Home.module.css';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { Button, Container, Paper, Slide } from '@material-ui/core';

import MyNav from '../../Components/Navbar/LandingNav';
import HowItWorks from './Containers/HowItWorks/HowItWorks';
import GraphicSection from './Containers/GraphicSection/GraphicSection';
import Support from './Containers/Support/Support.jsx';
import Footer from './Components/Footer/Footer';

import students_img from './students_img.svg';

import Link from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    button: {
        ["@media (min-width:320px)"]: {
            padding: 'calc(5px + 0.20225vw) calc(10px + 0.4045vw)',
            fontSize: "calc(11.25px + 0.455vw)"
        },

        ["@media (min-width:1483px)"]: {
            padding: '8px 16px',
            fontSize: "18px"
        },

        borderRadius: '10px',
        textTransform: 'none',
        fontWeight: '600',
        fontFamily: "'Inter', sans-serif",

        '&:first-of-type': {
            marginRight: '40px',
            backgroundColor: '#DB0202',
            '&:hover': {
                backgroundColor: "#D7143C"
            }
        },
        
        '&:nth-of-type(2)': {
            border: "3px solid black"
        }
    },

    info_container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
    
        marginTop: "65px"
    },

    info_subheader: {
        textTransform: "uppercase",
        fontFamily: "'Inter', sans-serif",
        fontWeight: "900",
        color: "#2D3436",
        fontSize: "12px",
        letterSpacing: "2.5px"
    },

    list: {
        marginTop: "35px",
        '& > li': {
            paddingLeft: 0,
            alignItems: "flex-start",
            '&:not(:last-of-type)': {
                marginBottom: "25px"
            }
        },
        
        '& > li > div': {
            paddingTop: '3px'
        }
    
    },

    list_icon: {
        alignSelf: "top"
    },

    paper: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "calc(11px + 0.977vw)",
        lineHeight: "calc(16px + 1.422vw)",
        padding: "10px 30px",
        borderRadius: "15px",


        ["@media (min-width:1160px)"]: {
            fontSize: "22px",
            lineHeight: "32px",

        },

    }

}));

const useVisibility = (offset=0) => {
    const [isVisible, setIsVisible] = useState(false);
    const currentElement = useRef();

    let [active, setActive] = useState(false);
    
    const onScroll = () => {
        if (!currentElement.current) {
            setIsVisible(false);
            return;
        }
        
        const top = currentElement.current.getBoundingClientRect().top;
        setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
    }

    useEffect(() => {
        document.addEventListener('scroll', onScroll, true);
        return () => document.removeEventListener('scroll', onScroll, true);
    });

    return [isVisible, currentElement]

}

export const Home = () => {

    const classes = useStyles();
    
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    const [currentElement1, currentElement2, currentElement3] = [useRef(), useRef(), useRef()];
    const [howItWorksRef, footerRef] = [useRef(), useRef()];

    const animationTime = 1000;

    const offset = 0;
    
    const onScroll1 = () => {
        if (isVisible1) {
            return;
        }
        if (!currentElement1.current) {
            setIsVisible1(false);
            return;
        }

        const top = currentElement1.current.getBoundingClientRect().top;
        const bottom = currentElement1.current.getBoundingClientRect().bottom;

        setIsVisible1(top >= 0 && bottom <= window.innerHeight);
    }

    const onScroll2 = () => {
        if (isVisible2) {
            return;
        }
        if (!currentElement2.current) {
            setIsVisible2(false);
            return;
        }

        const top = currentElement2.current.getBoundingClientRect().top;
        const bottom = currentElement2.current.getBoundingClientRect().bottom;

        setIsVisible2(top >= 0 && bottom <= window.innerHeight);
    }

    const onScroll3 = () => {
        if (isVisible3) {
            return;
        }

        if (!currentElement2.current) {
            setIsVisible3(false);
            return;
        }

        const top = currentElement2.current.getBoundingClientRect().top + 250;
        const bottom = currentElement2.current.getBoundingClientRect().bottom + 250;

        setIsVisible3(top >= 0 && bottom <= window.innerHeight);
    }

    useEffect(() => {
        document.addEventListener('scroll', onScroll1, true);
        return () => document.removeEventListener('scroll', onScroll1, true);
    });
    useEffect(() => {
        document.addEventListener('scroll', onScroll2, true);
        return () => document.removeEventListener('scroll', onScroll2, true);
    });
    useEffect(() => {
        document.addEventListener('scroll', onScroll3, true);
        return () => document.removeEventListener('scroll', onScroll3, true);
    });
    
    return (
        <React.Fragment>
            <MyNav page="home" howItWorksRef={howItWorksRef} footerRef={footerRef} />
            
            <div className={styles.container}>
                <div className={styles.page_1_container}> 
                    <div className={styles.page_1_content}> 
                    
                        
                        <div id={styles.student_img_container}>
                            <img src={students_img} alt="" />
                        </div>
                        <h2 className={styles.first_header}> Become an alum who <span style={{color: '#DB0202'}}>illuminates</span> a
                        student's college experience.
                        </h2>
                        <h3 className={styles.second_header}> Monthly donations sent directly to students at your alma mater struggling financially.
                        </h3>
                        <div className={styles.button_container}>
                            <Button variant="contained" color="secondary" className={classes.button} href="/signup"> 
                                Start Supporting
                            </Button>
                            <Button variant="outlined" className={classes.button} href="#"> 
                                Learn More
                            </Button>
                        </div>
                        <div style={{clear: "both"}} />
                        
                    </div>
                    <div id={styles.ground} />
                </div>

                <div className={styles.page_2_container}>
                    <div className={styles.page_2_content}>
                        <div id={styles.page_2_header_container}>
                            <h2 id={styles.page_2_header}> Your help can make an impact on students at your alma mater.
                            </h2>
                        </div>
                        <div id={styles.info_container}>

                                <Slide direction="right"  in={isVisible1} timeout={animationTime}>
                                    
                                    <Paper elevation={3} className={classes.paper} id={styles.paper_1} ref={currentElement1}>
                                        Nearly <b>70%</b> of students graduate with an <b> average debt of $29,900.</b>
                                    </Paper>
                                </Slide>

                                <Slide direction="left"  in={isVisible2} timeout= {animationTime}> 
                                    <Paper elevation={3} className={classes.paper} id={styles.paper_2} ref={currentElement2}>
                                        <b>More than 60% </b> of students reported <b>homelessness or housing and food insecurity</b>
                                    </Paper>
                                </Slide>
                           
                                <Slide direction="right" in={isVisible3} timeout={animationTime}> 
                                    <Paper elevation={3} className={classes.paper} id={styles.paper_3} ref={currentElement3}>
                                        <b>700,000+ students drop out</b> due to their financial situations.
                                    </Paper>
                                </Slide>

                        </div>
                        {/*<Container className={classes.info_container}>
                            <div className={styles.info}>
                                <h2 className={styles.info_header}>
                                    Your Alma Mater
                                </h2>
                                <Typography className={classes.info_subheader} noWrap>
                                    Students following your footsteps
                                </Typography>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemIcon className={classes.list_icon}>
                                            <img src={check} alt="" />
                                        </ListItemIcon>
                                        <h4 className={styles.list_text}> Nearly 70% of students take out student loan, graduating with an average debt of $29,900.</h4>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon className={classes.list_icon}>
                                            <img src={check} alt="" />
                                        </ListItemIcon>
                                        <h4 className={styles.list_text}> More than 700,000 students drop out due to their financial situations.</h4>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon className={classes.list_icon}>
                                            <img src={check} alt="" />
                                        </ListItemIcon>
                                        <h4 className={styles.list_text}> More than 60% students reported homlessness or housing and food insecurity.</h4>
                                    </ListItem>
                                </List>
                            </div>
                            <div className={styles.info}>
                                <h2 className={styles.info_header}>
                                    Your Contribution
                                </h2>
                                <Typography className={classes.info_subheader} noWrap>
                                    A personal way to give back
                                </Typography>
                                <List className={classes.list}> 
                                    <ListItem>
                                        <ListItemIcon className={classes.list_icon}>
                                            <img src={check_green} alt="" />
                                        </ListItemIcon>
                                        <h4 className={styles.list_text}> Your fund helps verified students of the university who demonstrate financial need.</h4>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon className={classes.list_icon}>
                                            <img src={check_green} alt="" />
                                        </ListItemIcon>
                                        <h4 className={styles.list_text}> Your fund is transferred directly to the student’s university account.</h4>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon className={classes.list_icon}>
                                            <img src={check_green} alt=""/>
                                        </ListItemIcon>
                                        <h4 className={styles.list_text}> Students receive a tangible benefit from your fund that exisiting resources fail to provide.</h4>
                                    </ListItem>
                                </List>
                            </div>
                        </Container> */}
                    </div>
                </div>

                <HowItWorks ref={howItWorksRef} />
                <GraphicSection />
                <Support />
                <Footer ref={footerRef} />
            </div>
        </React.Fragment>
    );
}