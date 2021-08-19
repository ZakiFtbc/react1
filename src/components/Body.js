
// import React from 'react'
// import {
//   useHistory
//   // BrowserRouter as Router,
//   // Switch,
//   // Route,
//   // Link
// } from 'react-router-dom'

// const Body = () => {
//   return (
//     <div />
//   )
// }

// export default Body

import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid
  // Paper,
  // FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
  // ListItemAvatar,
  // ListItemText,
  // FormHelperText
} from '@material-ui/core'
import minTableAlpha from './mintableAlpha.png'
import minTableAlphaSvg from './mintableAlpha.svg'

const useStyles = makeStyles(() => ({
  fullWidth: {
    // border: '1px solid gray',
    maxWidth: '100%',
    maxHeight: '100%',
    height: '500px'
    // backgroundImage: './mintableAlpha.png'
    // backgroundImage: 'url("./mintableAlpha.svg")'
    // backgroundImage: minTableAlphaSvg
    // backgroundColor: 'blue'
    //     padding: 10,
    // margin: 100
  },
  fullWidthRight: {
    // border: '1px solid gray',
    maxWidth: '100%',
    maxHeight: '100%',
    height: '500px'
    // backgroundColor: 'purple'
    //     padding: 10,
    // margin: 100
  }
}))

export default function Body () {
  const [leftStyle, setLeftStyle] = useState({ display: 'none' })
  const [rightStyle, setRightStyle] = useState({ display: 'none' })
  const [showImage, setShowImage] = useState('left')
  const [currentImage, setCurrentImage] = useState('blue') // temp -- todo change to image
  const classes = useStyles()
  const imgUrls = [minTableAlpha, minTableAlphaSvg]
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

  //   const Test = () => {
  //     return (
  //       <div style={{ height: '100%', width: '100%' }}>
  //         <Carousel responsive={responsive}>
  //           {imgUrls.map((path) => {
  //             return <img height='200px' width='100%' src={path} alt='' />
  //           })}
  //         </Carousel>
  //       </div>
  //     )
  //   }

  const defaultLeftStyle = {
    display: 'none',
    marginTop: '10%',
    float: 'left'
  }

  const defaultRightStyle = {
    display: 'none',
    marginTop: '10%',
    float: 'right'
    // margin: 'auto',
    // top: 100,
    // right: 100
  }

  function handleChange (payload = 'left') {
    console.log('hii', { payload, showImage })
    if ((payload === 'left' && showImage === 'left') || (payload === 'right' && showImage === 'right')) {
      // do nth
    } else {
      setShowImage(payload)
    }
  }

  //   for..?
  //   useEffect(() => {
  //     console.log('hii useeffect', { showImage })
  //   }, showImage)

  return (
  // <div className='App'>
  //   <h2>Hidden Button in the box. Move mouse in the box</h2>
    <div style={{ height: '100px', width: '100%' }}>

      {/* <div
        className={classes.fullWidth}
      > */}

      <Carousel responsive={responsive}>
        {imgUrls.map((path) => {
          return <img style={{ objectFit: 'cover' }} height='500px' width='100%' src={path} alt='' />
        })}
      </Carousel>
      {/* <div style={{ height: '100%', width: '100%' }}>
      </div> */}

      {/* <div
        className={showImage === 'left' ? classes.fullWidth : classes.fullWidthRight} // temp -- use image
        // background-image={url('./mintableAlpha.svg')}
        //   style={{ border: '1px solid gray', width: 300, height: 300, padding: 10, margin: 100 }}
        onMouseEnter={e => {
          setLeftStyle({ ...defaultLeftStyle, display: 'block' })
          setRightStyle({ ...defaultRightStyle, display: 'block' })
        }}
        onMouseLeave={e => {
          setLeftStyle({ ...defaultLeftStyle, display: 'none' })
          setRightStyle({ ...defaultRightStyle, display: 'none' })
          //   setStyle({ display: 'none' })
        }}
      >
        {/* add image here -- if condition base on showImage state - onchange when onclick arrow */}
      {/* <img className={classes.center} src={minTableAlphaSvg} alt='qrCode' /> */}
      {/* {showImage === 'left' && }
        {showImage === 'right' && } */}
      {/* <img
          className={classes.imageSize}
          src={minTableAlpha}
          alt='landingPage'
        /> */}

      {/* <div style={{ height: '100%', width: '100%' }}>
          <Carousel responsive={responsive}>
            {imgUrls.map((path) => {
              return <img className={classes.fullWidth} src={path} alt='' />
            })}
          </Carousel>
        </div> */}

      {/* use caret as arrows */}
      {/* <button style={leftStyle} onClick={() => handleChange('left')}>Left Arrow</button> */}
      {/* <button style={rightStyle} onChange={() => handleChange('right')}>Right Arrow</button> */}
      {/* <button style={rightStyle} onClick={() => handleChange('right')}>Right Arrow</button> */}
      {/* <button style={rightStyle}>Right Arrow</button> */}

      {/* </div> */}
    </div>
  // </div>
  )
}
