import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid, Typography
} from '@material-ui/core'
import minTableAlpha from './mintableAlpha.png'
import minTableAlphaSvg from './mintableAlpha.svg'

const useStyles = makeStyles(() => ({
  fullWidth: {
    // border: '1px solid gray',
    maxWidth: '100%',
    maxHeight: '100%',
    // height: '50px',
    // backgroundImage: './mintableAlpha.png'
    // backgroundImage: 'url("./mintableAlpha.svg")'
    // backgroundImage: minTableAlphaSvg
    backgroundColor: '#4805D6'
    //     padding: 10,
    // margin: 100
  },
  //   topBanner: {
  //     position: 'absolute',
  //     width: '1440px',
  //     height: '40px',
  //     left: '0px',
  //     top: '0px',
  //     background: '#4805D6'
  //   },
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
  }
}))

export default function TopBanner () {
//   const [leftStyle, setLeftStyle] = useState({ display: 'none' })
//   const [rightStyle, setRightStyle] = useState({ display: 'none' })
//   const [showImage, setShowImage] = useState('left')
//   const [currentImage, setCurrentImage] = useState('blue') // temp -- todo change to image
  const classes = useStyles()

  return (
  // <div className='App'>
  //   <h2>Hidden Button in the box. Move mouse in the box</h2>
    <>

      {/* <div
        className={classes.fullWidth}
      > */}
      {/* <img
          className={classes.imageSize}
          src={minTableAlpha}
          alt='landingPage'
        /> */}

      <Grid
        className={classes.fullWidth}
      >
        {/* change font color, make 1 liner */}
        {/* add that fire icon */}
        {/* <Typography className={classes.topBanner}>Ben Baller & Nicky Diamonds Limited Edition NFTs Drop is LIVE!  <u>CHECK IT OUT</u> </Typography> */}
        <Typography className={classes.topBanner}>🔥 Ben Baller & Nicky Diamonds Limited Edition NFTs Drop is LIVE! <u>Check it out</u></Typography>
        {/* <Typography className={classes.topBanner}>Ben Baller & Nicky Diamonds Limited Edition NFTs Drop is LIVE!  <Typography className={classes.topBannerUnderlined}>CHECK IT OUT</Typography> </Typography> */}

      </Grid>

      {/* </div> */}
    </>
  // </div>
  )
}
