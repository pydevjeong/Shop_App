import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const [fnameInput,setFnameInput]=useState([])
  const [lnameInput,setLnameInput]=useState([])
  const [emailInput,setEmailInput]=useState([])
  const [passwordInput,setPasswordInput]=useState([])

  const firstNameInput=(e)=>{
    setFnameInput(e.target.value)
  }
  const lastNameInput=(e)=>{
    setLnameInput(e.target.value)
  }
  const emailInputHandler=(e)=>{
    setEmailInput(e.target.value)
  }
  const passwordInputHandler=(e)=>{
    setPasswordInput(e.target.value)
  }
                  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`api나 db`,{
      method:"POST",
      body:JSON.stringify({
        firstname:fnameInput,
        lastname:lnameInput,
        email:emailInput,
        password:passwordInput,
        returnSecureToken:true,
      }),
      headers:{
        'Content-type':'application/json',
      },
    }).then((res)=>{
      if(res.ok){
        return res.json();
      }
      else{
        return res.json().then((data)=>{
          throw new Error('Not uploaded!!!!!!!!!!!!!')
        })
      }
    })
    // .then(()=>{}) 여기는 인증시간 설정
  };

  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={firstNameInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={lastNameInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={emailInputHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={passwordInputHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href='/signin' variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}