import React from 'react';

import styles from './Signup.module.css';

import { withStyles, makeStyles } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/styles/useTheme';

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
        '&:last-of-type': {
            marginBottom: 0
        },
        '&:not(:nth-of-type(4))': {
            marginBottom: "1.25vh"
        },
        
        '& label': {
            fontSize: "calc(12px + 0.555vw)"
        },

        ["@media (min-width:1080px)"]: {
            '& label': {
                fontSize: "18px"
            },
        },

        ["@media (min-width:1450px)"]: {
            '&:not(:nth-of-type(4))': {
                marginBottom: "10px"
            },

            '&:last-of-type': {
                marginBottom: 0
            },
            
            
            '& > p': {
                textAlign: "right",
                color: "#2484DC"
            }
        }
    },

    passwordHelperText: {
        color: "#DB0202",
        textDecoration: "none",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,

        lineHeight: "32px",
        textAlign: "right"

    },

    passwordHelperDiv: {
        marginBottom: "3.45vw",

        ["@media (min-width:1450px)"]: { 
            marginBottom: "50px"
        }
    },

    signup_button_container: {
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
        
    },

    emailError: {
        fontSize: "20px"
    }

}));

const Signup = () => {
    const classes = useStyles();

    // state
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordHasFocused, setPasswordHasFocused] = React.useState(false);
    const [emailError, setEmailError] = React.useState("");

    const [passwordError, setPasswordError] = React.useState(false);

    const [mustFocusEmail, setMustFocusEmail] = React.useState(false);

    const isDesktop = useMediaQuery('@media (min-width:961px)');

    const handleSubmit = (e) => {
        e.preventDefault();
        let res = fetch(`${developmentMode ? "http://localhost:9000" : ""}/api/signup`, {
            method: 'post',
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(res => {
                setFirstName(res.firstName);
                setLastName(res.lastName);
                setEmail(res.email);
                setPassword(res.password);
                if (res.errors && res.errors.email) {
                    console.log(res.errors.email.message);
                    setEmailError(res.errors.email.message);;
                }
                if (res.errors && res.errors.password) {
                    console.log(res.errors.password.message);
                    setPasswordError(true);
                }
                if (res.userExistsError) {
                    console.log(res.userExistsError);
                    setEmailError(res.userExistsError);
                }
                if (res.success)
                    window.location.href="/new-user";
            });
    }

    const getPasswordDisplay = () => {
        if (password.length >= 8 && password.length <= 100) {
            return "hidden";
        }
        return "initial";
    }

    const EmailErrorTooltip = withStyles(theme => ({
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



    return (
        <div id={styles.container}>
            <div id={styles.content}>
                <Link to="/home" id={styles.header_link}> <p id={styles.header}> Aluminus </p></Link>
                <Paper elevation={3} square className={classes.paper}>
                    <p id={styles.form_header}>
                        Sign Up
                    </p>
                    <form onSubmit={handleSubmit} id={styles.form} autoComplete="off">
                        <TextField
                            id="first-name-input"
                            className={classes.input}
                            label="First Name"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            autoComplete="current-first-name"
                            fullWidth
                        />
                        <TextField
                            id="last-name-input"
                            className={classes.input}
                            label="Last Name"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            autoComplete="current-last-name"
                            fullWidth
                        />
                        
                            <TextField
                                id="email-input"
                                className={classes.input}
                                label={<React.Fragment><EmailErrorTooltip 
                                    title={emailError}
                                    placement={isDesktop ? "left" : "bottom" }
                                    open={emailError !== ""}
                                    TransitionComponent={Fade}
                                    interactive
                                    arrow
                                    // PopperProps={{
                                    //     anchorEl: getEmailRefAnchor()
                                    // }
                                    // }
                            
                                ><span></span></EmailErrorTooltip><span>Email</span></React.Fragment>}
                                value={email}
                                onChange={e => {
                                    setEmail(e.target.value); 
                                    if (emailError) 
                                        setEmailError("");
                                    }}
                                type="email"
                                autoComplete="current-email"
                                fullWidth
                                error={emailError !== ""}
                            />
                        

                        <TextField
                            id="password-input"
                            className={classes.input}
                            label="Password"
                            value={password}
                            onChange={e => {setPassword(e.target.value); setPasswordError(false);}}
                            type="password"
                            autoComplete="current-password"
                            fullWidth
                            error={passwordError}
                        />
                        <div className={classes.passwordHelperDiv}>
                            <FormHelperText className={classes.passwordHelperText} style={{visibility: getPasswordDisplay()}}> Must be between 8 and 100 characters long.</FormHelperText>
                        </div>
                        <div className={classes.signup_button_container}>
                            <Button variant="contained" color="secondary" className={classes.button} type="submit"> 
                                    Sign Up
                            </Button>
                        </div>

                        <p id={styles.login}>Already on Aluminus? <Link to="/login" id={styles.login_link}>Sign In</Link></p>

                    </form>
                </Paper>
            </div>
            
        </div>
    )
}

export default Signup;