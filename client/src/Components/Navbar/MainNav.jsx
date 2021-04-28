import React from 'react';

import styles from './MainNav.module.css';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from'@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Link as RouterLink } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import clsx from 'clsx';

import user_icon from './user_icon.svg';

const useStyles = makeStyles(theme => ({
    nav: {
        backgroundColor: 'white',
        margin: '0px'
    },

    toolbar: {
        padding: 0,
        display: "flex",
        position: "relative",

        maxWidth: "78vw",
        marginLeft: "11vw",

        ["@media (min-width:961px)"]: {
            maxWidth: "69vw",
            marginLeft: "15.5vw"
        },

        ["@media (min-width:1450px)"]: {
            width: "1000px",
            marginLeft: "calc((100vw - 1000px) / 2)"
        },
        overflow: "hidden"
    },

    sectionDesktop: {
        display: 'none',
        ["@media (min-width:961px)"]: {
            display: "flex",
            position: "absolute",
            right: 0,
            height: "100%",
            alignItems: "center"
            
        }
    },

    title: {
        
        display: 'block',
        color: 'black',
        fontWeight: 'bold',
        '&:hover': {
            textDecoration: 'none'
        },
        
        fontSize: "calc(17.1px + 0.91vw)",

        ["@media (min-width:961px)"]: {
            fontSize: '24px',
        }

    },

    headers: {
        
    },

    header: {
        fontFamily: "'Inter', sans-serif",
        letterSpacing: -0.6,
        color: "#2C2C2C",

        marginRight: "50px",
        lineHeight: 35,
        '&:hover': {
            textDecoration: "none"
        }  
    },

    dropdown: {
        '& ul': {
            padding: "0px!important",
            width: "100%!important"
        },

        "& li": {
            padding: "10px 40px",
            
        },

        "& p": {
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            textAlign: "center",
            width: "100%"
        }
    },

    sectionMobile: {

        display: 'flex',
        width: "5vw",
        marginLeft: "20vw",

        ['@media (min-width:961px)']: {
            display: 'none'
        }
    },

    mobileMenu: {
        '& ul': {
            padding: "0px!important",
            width: "100%!important"
        },

        "& li": {
            padding: "8px 16px"
        }
    },

    mobile_menu_item: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "12px"
    },

    more_icon: {

        fontSize: "32px",
        
        ['@media (min-width:600px)']: {
            fontSize: "32px"
        },

    },

}));

const MainNav = () => {
    const classes = useStyles();

    const theme = useTheme();

    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobile = useMediaQuery("@media (max-width:960px)");
    
    // state
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [dropdownAnchorEl, setDropdownAnchorEl] = React.useState(null);
    
    // attributes
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isDropdownOpen = Boolean(dropdownAnchorEl);

    // handlers
    const handleMobileMenuOpen = (event => {
        setMobileMoreAnchorEl(event.currentTarget);
    })
    const handleMobileMenuClose = (event => {
        setMobileMoreAnchorEl(null);
    })

    const handleDropdownOpen = (event => {
        setDropdownAnchorEl(event.currentTarget);
    })
    const handleDropdownClose = (event => {
        setDropdownAnchorEl(null);
    })

    const renderDropdown = (
        <Menu
            anchorEl={dropdownAnchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            id='dropdown'
            className={classes.dropdown}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={isDropdownOpen}
            onClose={handleDropdownClose}
        >
            <MenuItem divider>
                <Typography className={classes.dropdown_item}> Settings </Typography>
            </MenuItem>

            <MenuItem divider>
                <Typography className={classes.dropdown_item}> FAQ </Typography>
            </MenuItem>

            <MenuItem>
                <Typography className={classes.dropdown_item}> Sign out</Typography>
            </MenuItem>

        </Menu>
    )


    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            id='mobile-menu'
            className={classes.mobileMenu}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem button href="#" divider>
                <Typography className={classes.mobile_menu_item}> Your Students </Typography>
            </MenuItem>

            <MenuItem divider>
                <Typography className={classes.mobile_menu_item}> Find Students </Typography>
            </MenuItem>

            <MenuItem divider>
                <Typography className={classes.mobile_menu_item}> Settings </Typography>
            </MenuItem>

            <MenuItem divider>
                <Typography className={classes.mobile_menu_item}> FAQ </Typography>
            </MenuItem>

            <MenuItem divider>
                <Typography className={classes.mobile_menu_item}> Sign out</Typography>
            </MenuItem>
        </Menu>

    )

    return (
        <div id={styles.container}>
            <AppBar position="fixed" className={classes.nav}>
                <ToolBar className={classes.toolbar}>
                    <div className={classes.titleContainer}>
                        <Link 
                            className={classes.title}
                            id={styles.title}
                            variant="h6"
                            href="#"
                            noWrap
                            
                        >
                            Aluminus
                        </Link>
                    </div>

                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                            <Link className={classes.header} href='#' onClick={event => event.preventDefault()} noWrap>
                                Your students
                            </Link>
                            <Link className={classes.header} href="#" onClick={event => event.preventDefault()} noWrap>
                                Find students
                            </Link>
                            <Button 
                                aria-label="show more"
                                aria-controls='dropdown'
                                aria-haspopup="true"
                                onClick={handleDropdownOpen}
                                color="primary"
                                className={classes.header} 
                                id={styles.account_header}
                            >
                                User Name <img id={styles.account_img} src={user_icon} height="23" width="23" alt="" />
                            </Button>
                            


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
            {isMobile && renderMobileMenu}
            {renderDropdown}
        </div>
    )
}

export default MainNav;