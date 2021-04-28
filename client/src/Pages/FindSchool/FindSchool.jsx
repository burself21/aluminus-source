import React from 'react';

import styles from './FindSchool.module.css';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import schools from './schools';

import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    form: {
        marginTop: "12vh",
        ['@media (min-width:1450px)']: {
            marginTop: "100px",
        }
    },

    formControl: {
        minWidth: 229,
        marginRight: "10px",

        '& input': {
            fontFamily: "'Inter', sans-serif"
        },
        ['@media (min-width:450px)']: {
            minWidth: "263.35px",
            marginRight: "15px"
        },

        ['@media (min-width:641px)']: {
            minWidth: "310px",
            marginRight: "25px"
        },

        ['@media (min-width:1450px)']: {
            
            '& ul': {
                position: "relative",
            }
        }
    },
    select: {
        '& > div:focus': {
            backgroundColor: "white"
        },
        fontFamily: "'Inter', sans-serif",
        
        '& > div': {
            paddingTop: 12,
            paddingBottom: 12
        },

        ['@media (max-width:640px)']: {
            fontSize: 14
        },
        ['@media (max-width:450px)']: {
            fontSize: 12
        }
    },

    select_empty: {
        color: "#828282",
    },

    menuItem: {
        minWidth: "300px",
        fontFamily: "'Inter', sans-serif",

        ['@media (max-width:641px)']: {
            fontSize: "14px",
            minHeight: 35,
            minWidth: 250,
            padding: "0px 10px",
            '& li': {
                padding: "0px!important",
            }
        },

        ['@media (max-width:450px)']: {
            fontSize: "12px",
            minWidth: 200
            
        }
    },
    submit: {
        padding: '8px 10px',
        fontSize: "12px",
        ["@media (max-width:450px)"]: {
        },

        ["@media (min-width:450px)"]: {
            fontSize: "14px",
            padding: "7.5px 18px"
        },

        ["@media (min-width:641px)"]: {
            padding: '7.5px 18px',
            fontSize: "16px"
        },

        borderRadius: '6px',
        textTransform: 'none',
        fontWeight: '500',
        fontFamily: "'Inter', sans-serif",


        backgroundColor: '#C91818',
        '&:hover': {
            backgroundColor: "#C52a52"
        },
    }
}));

const FindSchool = () => {

    const classes = useStyles();
    // state
    const [school, setSchool] = React.useState("");
    const [selectFocused, setSelectFocus] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (school) {
            window.location.href = "/find-students"
        }
    }

    return (
        <div id={styles.container}>
            <div id={styles.content}>
                <p id={styles.logo}> Aluminus </p>
                <div id={styles.main_content}>
                    <p id={styles.header}>First, let’s find your alma mater.</p>
                    <p id={styles.note}>You’re on your way to becoming an invaluable supporter for students in need.</p>
                    <form onSubmit={handleSubmit} className={classes.form}>
                        <FormControl className={classes.formControl} variant="outlined">
                            {/* <InputLabel id="select-label" className={styles.selectLabel}>{school.length === 0 && !selectFocused && "Search for your alma mater"}</InputLabel> */}
                            <Select
                                // labelId="select-label"
                                id="select"
                                className={school ? classes.select : clsx(classes.select, classes.select_empty)}
                                displayEmpty
                                value={school}
                                onChange={e => setSchool(e.target.value)}
                                onFocus={() => setSelectFocus(true)}
                                onBlur={() => setSelectFocus(false)}
                                MenuProps={{
                                    anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "center"
                                    },
                                    transformOrigin: {
                                    vertical: "top",
                                    horizontal: "center"
                                    },
                                    getContentAnchorEl: null
                                }}
                                inputProps={{
                                    "aria-hidden": false
                                }}
                            >
                                <MenuItem value="" disabled style={{display: "none"}} className={classes.menuItem} >Select your alma mater</MenuItem>
                                {schools && [...Array(schools.length).keys()].map(id => 
                                    <MenuItem value={schools[id].name} key={id} className={classes.menuItem}>
                                        {schools[id].name} 
                                    </MenuItem>
                                )}

                            </Select>
                        </FormControl>

                        <Button variant="contained" color="secondary" className={classes.submit} type="submit"> 
                            Select
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FindSchool;