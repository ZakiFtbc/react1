import React from 'react'
import {
  useHistory
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from 'react-router-dom'

const YourComponent = () => {
  const history = useHistory()

  const handleClick = (event, username = 'testuser', password = 'testpass') => {
    history.push({
      pathname: '/login',
      // search: '?update=true',  // query string
      state: {
        username, password
      }
    })
  }

  return (
    <div>
      <button onClick={handleClick} type='button'>Sign-In</button>
    </div>
  )

  // return (
  //   <Container component='main' maxWidth='xs'>
  //     <CssBaseline />
  //     <div className={classes.paper}>
  //       <GridList className={classes.gridList} cols={1}>
  //         <GridListTile key={1} className={classes.title}>
  //           <img
  //             className={classes.imageSize}
  //             src='https://s3-ap-southeast-1.amazonaws.com/production.thinkval.static/images/VAL_RGB_Blue.png'
  //             alt='thinkVal'
  //           />
  //         </GridListTile>
  //       </GridList>

  //       <Typography component='h1' variant='h5'>
  //         Welcome back
  //       </Typography>
  //       <div className={classes.form} noValidate>
  //         <TextField
  //           variant='outlined'
  //           margin='normal'
  //           value={auth.email}
  //           required
  //           fullWidth
  //           id='email'
  //           label='Email Address'
  //           name='email'
  //           autoComplete='email'
  //           autoFocus
  //           onChange={handleLoginInputChange}
  //           disabled={loading}
  //         />
  //         <TextField
  //           variant='outlined'
  //           margin='normal'
  //           value={auth.password}
  //           required
  //           fullWidth
  //           name='password'
  //           label='Password'
  //           type='password'
  //           id='password'
  //           autoComplete='current-password'
  //           onChange={handleLoginInputChange}
  //           onKeyDown={handleKeyDown}
  //           disabled={loading}
  //         />

  //         <Button
  //           type='submit'
  //           fullWidth
  //           variant='contained'
  //           color='primary'
  //           className={classes.submit}
  //           onClick={() => handleLogin(auth)}
  //           disabled={loading}
  //           // onClick={login}
  //         >
  //           {loading ? 'Signing you in' : 'Sign In'}
  //         </Button>

  //       </div>
  //     </div>
  //   </Container>
  // )
}

export default YourComponent
