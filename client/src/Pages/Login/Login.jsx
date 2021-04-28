import React from 'react';

import styles from './Login.module.css';

import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import FormHelperText from '@material-ui/core/FormHelperText';

import Link from 'react-router-dom/Link';

const developmentMode = false;

const useStyles = makeStyles(theme => ({

    paper: {

        padding: "4.2vh 7.5vw 25px 6.5vw",

        ["@media (min-width:1450px)"]: {
            padding: "35px 110px 25px 95px"
        }
    },

    input: {

        '&:first-of-type': {
            marginBottom: "2.5vh"
        },
        
        '& label': {
            fontSize: "calc(12px + 0.555vw)"
        },
        '& > p': {
            textAlign: "right",
            color: "#2484DC"
        },
        
        ["@media (min-width:1080px)"]: {
            '& label': {
                fontSize: "18px"
            },
        },

        ["@media (min-width:1450px)"]: {
            '&:first-of-type': {
                marginBottom: "20px"
            },
            
            '& > p': {
                textAlign: "right",
                color: "#2484DC"
            }
        }
    },

    passwordHelperText: {
        color: "#2484DC",
        textDecoration: "none",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        '&:hover': {
            textDecoration: "underline"
        },
        lineHeight: "32px"

    },

    passwordHelperDiv: {
        textAlign: "right",
        marginBottom: "7.586vw",

        ["@media (min-width:1450px)"]: { 
            marginBottom: "110px"
        }
    },

    login_button_container: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "15px"
    },

    button: {
        
        padding: 'calc(5px + 0.20225vw) calc(22.5px + 0.91vw)',
        fontSize: "calc(11.25px + 0.455vw)",


        ["@media (min-width:1450px)"]: {
            padding: '6px 36px',
            fontSize: "18px"
        },

        borderRadius: '6px',
        textTransform: 'none',
        fontWeight: '600',
        fontFamily: "'Inter', sans-serif",


        backgroundColor: '#C91818',
        '&:hover': {
            backgroundColor: "#C52a52"
        },
        
    }

}));
const Login = () => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('@media (min-width: 961px)');

    // state
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");

    const ErrorTooltip = withStyles(theme => ({
        tooltip: {
            fontSize: 14,
            color: 'white',
            backgroundColor: "#DB0202",
            fontFamily: "'Inter', sans-serif",
            top: "25px",
            right: "5px",
            
            ['@media (max-width: 960px)']: {
                left: "23vw",
                top: "35px",
                maxWidth: "28.8vw"
            },

            ['@media (max-width:640px)']: {
                left: "33vw",
                maxWidth: "40vw"
            },
            ['@media (max-width:599px)']: {
                top: "25px"
            }
        },
        arrow: {

            '&:before': {
                backgroundColor: "#DB0202",
            }
        }

    }))(Tooltip);

    const handleSubmit = (e) => {
        e.preventDefault();
        let res = fetch(`${developmentMode ? "http://localhost:9000" : ""}/api/login`, {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(res => {
                setEmail(res.email);
                setPassword(res.password);
                if (res.userNotFoundError) {
                    console.log("No user found with this email.");
                    setEmailError("No user found with this email.");;
                }
                if (res.incorrectPasswordError) {
                    console.log("Password is incorrect. Please try again.");
                    setPasswordError("Password is incorrect. Please try again.");
                }
                if (res.success) {
                    console.log("User successfully authenticated.");
                }
            });
    }

    const errorTooltip = (err, text) => (
        <React.Fragment>
            <ErrorTooltip 
                title={err}
                placement={isDesktop ? "left" : "bottom" }
                open={Boolean(err)}
                TransitionComponent={Fade}
                interactive
                arrow
                // PopperProps={{
                //     anchorEl: getEmailRefAnchor()
                // }
                // }
            >
                <span></span>
            </ErrorTooltip>
            {text}
        </React.Fragment>
    )

    return (
        <div id={styles.container}>
            <div id={styles.content}>
                <Link to ="/home" id={styles.header_link}><p id={styles.header}> Aluminus</p> </Link>
                <Paper elevation={3} square className={classes.paper}>
                    <p id={styles.form_header}>
                        Login
                    </p>
                    <form id={styles.form} onSubmit={handleSubmit} autoComplete="off">
                        <TextField
                            id="email-input"
                            className={classes.input}
                            label={errorTooltip(emailError, "Email")}
                            type="email"
                            value={email}
                            onChange={e => {setEmail(e.target.value); setEmailError("");}}
                            autoComplete="current-email"
                            fullWidth
                            error={Boolean(emailError)}
                        />
                        <TextField
                            id="password-input"
                            className={classes.input}
                            label={errorTooltip(passwordError, "Password")}
                            type="password"
                            value={password}
                            onChange={e => {setPassword(e.target.value); setPasswordError("");}}
                            autoComplete="current-password"
                            fullWidth
                            error={Boolean(passwordError)}
                        />
                        <div className={classes.passwordHelperDiv}>
                            <FormHelperText className={classes.passwordHelperText} component="a" href="#"> Forgot Password?</FormHelperText>
                        </div>
                        <div className={classes.login_button_container}>
                            <Button variant="contained" color="secondary" className={classes.button} type="submit"> 
                                    Log In
                            </Button>
                        </div>

                        <p id={styles.sign_up}>New to Aluminus? <Link to="/signup" id={styles.join_link}>Join Now</Link></p>

                    </form>
                </Paper>
            </div>
        </div>
    )
}

export default Login;