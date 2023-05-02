import  React, { FormEvent } from "react";
import { Container, Grid, Paper, Box, Typography, TextField, Button } from '@mui/material'
import { Link } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


type Register={
    username:string;
    password:string; 
  }

export const Registro = () => {

    const [registerData, setRegisterData] = React.useState<Register>({
        username:'',
        password:'',
    })
    
    const dataLogin =(e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({...registerData, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e: FormEvent<HTMLInputElement>) =>{
      e.preventDefault();
    }

    return(
        <Container>
          <Grid 
        container 
        direction='column-reverse' 
        alignItems='center' 
        justifyContent='center'
        sx={{ minHeight:'100vh'}}
        
        >
          <Grid item>
          <Paper sx={{padding:'1.2em', borderRadius:'0.5em', backgroundColor:'#ffe0b2' }}>
            <Typography sx={{mt:1, mb:1}}variant='h4'>Register</Typography>
            <Box component='form' onSubmit={handleSubmit}>
               <TextField
               id="input-with-sx"
               variant="outlined"
               name='name'
               type='name'
                margin='normal'
                fullWidth
                label='Name' 
                sx={{mt:2, mb:1.5}} 
                required
                onChange={dataLogin}/>

                <TextField                 
                id="input-with-sx"
                variant="outlined"
                name='username'
                type='username'
                margin='normal'
                fullWidth 
                label='Username' 
                sx={{mt:1.5, mb:1.5}} 
                required
                onChange={dataLogin}              
               />
                
               <TextField                 
               id="input-with-sx"
               variant="outlined"
               name='email'
               type='email'
               margin='normal'
               fullWidth 
               label='Email Addres' 
               sx={{mt:1.5, mb:1.5}} 
               required
               onChange={dataLogin}             
              />

                <TextField                 
                id="input-with-sx"
                variant="outlined"
                name='confirmEmail'
                type='email'
                margin='normal'
                fullWidth 
                label='Confirm Email Addres' 
                sx={{mt:1.5, mb:1.5}} 
                required
                onChange={dataLogin}              
               />

               <TextField                 
                id="input-with-sx"
                variant="outlined"
                name='password'
                type='password'
                margin='normal'
                fullWidth 
                label='Password' 
                sx={{mt:1.5, mb:1.5}} 
                required
                onChange={dataLogin}              
               />

                <TextField                 
                id="input-with-sx"
                variant="outlined"
                name='confirmpassword'
                type='password'
                margin='normal'
                fullWidth 
                label='Confirm Password' 
                sx={{mt:1.5, mb:1.5}} 
                required
                onChange={dataLogin}              
               />
               <FormControlLabel required control={<Checkbox />} label="Acepto terminos y condiciones" />
               <Link to="/logIn">
               <Button fullWidth 
                type='submit' variant='contained' sx={{mt:1, mb:1, bgcolor:"#0d47a1"}}>Register</Button>
                </Link>
            </Box>
          </Paper>
          </Grid>
        </Grid>
        </Container>
    )
}