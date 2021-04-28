import React from 'react';

import { fade, useTheme, makeStyles } from '@material-ui/core/styles';
import styles from './LandingNav.module.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


//icons
import MoreIcon from '@material-ui/icons/MoreVert';
import MailIcon from '@material-ui/icons/Mail';

import { Link as RouterLink } from 'react-router-dom';

import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    grow: {
        ["@media (min-width:320px)"]: {
            width: "12vw"
        },

        ["@media (min-width:1080px)"]: {
            flexGrow: 0.85,
            maxWidth: "550px"
        }
    },

    nav: {
        backgroundColor: 'white',
        margin: '0px!important'
    },

    toolbar: {
        padding: 0,

        ["@media (min-width:320px)"]: {
            maxWidth: "75vw",
            marginLeft: "18.5vw"
        },

        ["@media (min-width:961px)"]: {
            maxWidth: "78vw",
            marginLeft: "11vw"
        },

        ["@media (min-width:1483px)"]: {
            width: "1165px",
            marginLeft: "calc((100vw - 1165px) / 2)"
        }
    },

    nav_links: {
        marginRight: theme.spacing(2)
        
    },

    nav_button: {
        color: '#DB0202',
        fontWeight: 500,
        fontSize: '16px',
        fontFamily: "'Inter', sans-serif",
        textTransform: "capitalize",
        transition: "0.5s",
        '&:first-of-type': {
            marginRight: theme.spacing(0.5)
        },
        border: "2px solid #DB0202",
        '&:hover': {
            backgroundColor: "#ffe8e7"
        },
        borderRadius: 22,
        padding: "0px 24px",
        ["@media (max-width:1080px)"]: {
            fontSize: 14,
            padding: "0px 18px"
        }

    },

    headers: {
        
        fontFamily: "'Inter', sans-serif",
        marginRight: theme.spacing(4),
        fontWeight: 500,
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        '& > a': {
            fontSize: 14,
            lineHeight: '40px',
        },

        ["@media (min-width:1080px)"]: {
            marginRight: theme.spacing(4),
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
            '& > a': {
                fontSize: 16
            },
        }
    },

    header: {
        color: '#DB0202'
    },

    title: {
        
        display: 'block',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '24px',
        '&:hover': {
            textDecoration: 'none'
        }

    },

    sectionDesktop: {
        display: 'none',
        ["@media (min-width:961px)"]: {
            display: 'flex'
        }
    },

    sectionMobile: {
        ['@media (min-width:320px)']: {
            display: 'flex',
            width: "5vw"
        },

        ['@media (min-width:961px)']: {
            display: 'none'
        }
    },

    mobile_menu: {
        '& ul': {
            padding: 0
        }
    },

    more_icon: {

        ['@media (min-width:320px)']: {
            fontSize: "32px"
        },
        ['@media (min-width:600px)']: {
            fontSize: "32px"
        },
    }

}));


const MyNav = (props) => {

    const classes = useStyles();
    const theme = useTheme();

    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    
    // state
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    
    // attributes
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // handlers
    const handleMobileMenuOpen = (event => {
        setMobileMoreAnchorEl(event.currentTarget);
    })
    const handleMobileMenuClose = (event => {
        setMobileMoreAnchorEl(null);
    })


    const handleScrollHow = (event) => {
        event.preventDefault();
        const ref = props.howItWorksRef.current;
        handleScroll(ref);
    }
    
    const handleScrollFooter = (event) => {
        event.preventDefault();
        const ref = props.footerRef.current;
        handleScroll(ref);
    }

    const handleScroll = (ref) => {
        window.scrollTo({
            top: ref.offsetTop - (isSmall ? 56 : 64),
            left: 0,
            behavior: "instant"
        });
    }
    
    // render components
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
            id='mobile-menu'
            className={classes.mobile_menu}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'center'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem button href="#" divider>
                <Typography className={classes.mobile_menu_item}> Who we are </Typography>
            </MenuItem>

            <MenuItem divider>
                <Typography className={classes.mobile_menu_item}> How it works </Typography>
            </MenuItem>

            <MenuItem divider>
                <Typography className={classes.mobile_menu_item}> Contact Us </Typography>
            </MenuItem>

            <MenuItem>
                <Typography className={classes.mobileMenu}> Sign in/up</Typography>
            </MenuItem>
        </Menu>

    )
    return (
        <div>
            <AppBar className={classes.nav}>
                <ToolBar className={classes.toolbar}>
                    <Link 
                        className={clsx(classes.title, styles.title)}
                        variant="h6"
                        href="#"
                        noWrap
                        
                    >
                        Aluminus
                    </Link>

                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                        <Typography className={classes.headers}> 
                            <Link className={classes.header} href='#' onClick={event => event.preventDefault()} noWrap>
                                Who we are
                            </Link>
                            <Link className={classes.header} href="#" onClick={ handleScrollHow } noWrap>
                                How it works
                            </Link>
                            <Link className={classes.header} href='#' onClick={ handleScrollFooter } noWrap>
                                Contact Us
                            </Link>

                        </Typography>
                        <Button variant="outlined" component={ RouterLink } to="/login" className={classes.nav_button}>Login</Button>
                        <Button variant="outlined" component={ RouterLink } to="/signup" className={classes.nav_button}>Sign Up</Button>
                        {/*<IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton> */}

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                        aria-label="show more"
                        aria-controls='mobile-menu'
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="primary"
                        >
                        <MoreIcon className={classes.more_icon} />
                        </IconButton>
                    </div>
                </ToolBar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}

export default MyNav;