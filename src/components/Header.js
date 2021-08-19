import React, { useState, useEffect } from 'react'
import { alpha, makeStyles } from '@material-ui/core/styles'
import {
  Grid, Typography
} from '@material-ui/core'
import minTableAlpha from './mintableAlpha.png'
import minTableAlphaSvg from './mintableAlpha.svg'
import minTableIcon from './mintableIcon.svg'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'

// import { alpha, makeStyles } from '@material-ui/core/styles';mintableIcon
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
// import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    // border: '1px solid gray',
    maxWidth: '100%',
    maxHeight: '100%',
    // height: '50px',
    // backgroundImage: './mintableAlpha.png'
    // backgroundImage: 'url("./mintableAlpha.svg")'
    // backgroundImage: minTableAlphaSvg
    // backgroundColor: '#4169e1'
    backgroundImage: 'linear-gradient(to right, #6a5acd , #4169e1)'
    //     padding: 10,
    // margin: 100
  },
  topBanner: {
    textAlign: 'center',
    color: 'white',
    textDecorationColor: 'white',
    // display: 'inline',
    alignItems: 'center'
    // flexDirection: 'column'
  },
  topBannerUnderlined: {
    textAlign: 'center',
    color: 'white',
    textDecorationColor: 'white',
    display: 'inline',
    alignItems: 'center',
    flexDirection: 'column',
    textDecoration: 'underline'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}))

export default function Header () {
//   const [leftStyle, setLeftStyle] = useState({ display: 'none' })
//   const [rightStyle, setRightStyle] = useState({ display: 'none' })
//   const [showImage, setShowImage] = useState('left')
//   const [currentImage, setCurrentImage] = useState('blue') // temp -- todo change to image
  const classes = useStyles()

  return (

    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar>
          <img src={minTableIcon} alt='qrCode' />

          {/* <img className={classes.center} src={minTableAlphaSvg} alt='qrCode' /> */}
          {/* <Typography className={classes.title} variant='h6' noWrap>
            Material-UI
          </Typography> */}

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search for anything'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>

  // <div class="Header_appHeadercontainer__1loo6 container"><div class="CookieConsent" style="align-items: baseline; background: rgb(4, 161, 245); color: white; display: flex; flex-wrap: wrap; justify-content: space-between; left: 0px; position: fixed; width: 100%; z-index: 999; bottom: 0px;"><div class="" style="flex: 1 0 300px; margin: 15px;">No information is stored about you or related to you, but Mintable does use a few cookies to enhance the user experience.</div><div class=""><button class="" id="rcc-confirm-button" aria-label="Accept cookies" style="background: rgb(255, 212, 45); border: 0px; border-radius: 0px; box-shadow: none; color: rgb(78, 80, 59); cursor: pointer; flex: 0 0 auto; padding: 5px 10px; margin: 15px; font-size: 13px;">I understand</button></div></div><nav class="navbar navbar-expand-lg navbar-light"><span class="Header_navbarlogo__2fYL3 navbar-brand"><img loading="lazy" src="/static/media/logo.448e3bcd.svg" class="img-fluid" alt="logo"></span><div type="search" class="Header_appselectfield__3owzr input-group"><input placeholder="Search for anything" id="searchForm" class="form-control"> <div class="Header_appDropdownbtn__3Z7tq dropdown input-group-append"><button aria-haspopup="true" aria-expanded="false" id="input-group-dropdown-2" type="button" class="dropdown-toggle btn btn-outline-default">Type</button></div> <div class="input-group-append"><span class="input-group-text" style="background: rgba(234, 234, 255, 0.75); cursor: pointer; border: 2px solid rgb(234, 234, 255); border-radius: 0px;"><img loading="lazy" src="https://d2alktbws33m8c.cloudfront.net/searchicon.svg" alt="search"></span></div></div><button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="Header_apphamburgericon__3LRT5 navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button><div class="Header_appmenufield__3M42U navbar-collapse collapse" id="basic-navbar-nav"><div class="ml-auto navbar-nav"><a href="#" class="Header_headerLink__3ydVe nav-link" role="button">Browse</a><a href="#" class="Header_headerLink__3ydVe nav-link" role="button">Discover</a><a href="#" class="Header_headerLink__3ydVe nav-link" role="button">Mint an item</a><a href="#" class="Header_headerLinkUnderlined__2Gu4Q nav-link" role="button">Seller's University</a><a href="#" class="Header_DAOlink__1WqIr nav-link" role="button">Vote/DAO</a><a href="#" class="Header_appLogin__jqaiT nav-link" role="button">Login</a> </div><button type="button" class="btn btn-primary">Create Account</button><div class="Header_appChainSelectMobile__1inTk input-group"><div class="Header_appChainDropdownbtn__1nENh dropdown input-group-append"><button aria-haspopup="true" aria-expanded="false" id="input-group-dropdown-2" type="button" class="dropdown-toggle btn btn-outline-default">Ethereum</button></div></div><div class="Header_appInternalmenu__5NuM-"><div class="InternalLinks_appInternalcontainer__2pRoK"><div class="InternalLinks_appInternallinks__3f-mH"><div class="justify-content-center navbar-nav"><div class="InternalLinks_navItem__2H7wP nav-item"><a href="#" class="nav-link" role="button">Art</a></div><div class="InternalLinks_navItem__2H7wP nav-item"><a href="#" class="nav-link" role="button">Collectibles</a></div><div class="InternalLinks_navItem__2H7wP nav-item"><a href="#" class="nav-link" role="button">Game Items</a></div><div class="InternalLinks_navItem__2H7wP nav-item"><a href="#" class="nav-link" role="button">Music</a></div><div class="InternalLinks_navItem__2H7wP nav-item"><a href="#" class="nav-link" role="button">Domains</a></div><div class="InternalLinks_navItem__2H7wP nav-item"><a href="#" class="nav-link" role="button">Templates</a></div><div class="InternalLinks_navItem__2H7wP nav-item"><a href="#" class="nav-link" role="button">Videos</a></div></div></div></div></div></div></nav></div>

  )
}
