import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { useContext } from 'react';
import { ContextFire } from '..';
// import firebase from "firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const Login = () => {
    const {auth} = useContext(ContextFire)

    const login = async () => {
        const provider = new GoogleAuthProvider();
        try {
         const {user} = await signInWithPopup(auth, provider);
         console.log(user)
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    }

    let google_icon = <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640"><path fill="#74C0FC" d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z"/></svg>


    return ( 
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid style={{width: 400, borderRadius: "20px"}}
                    container
                    alignItems={'center'}
                    direction={'column'}
                >
                    {/* p={5} is a paddig */}
                    <Box p={5}  >
                        <Button onClick={login} style={{borderRadius: "40px"}} variant={"outlined"}>Log in with google<span style={{marginLeft: "5px"}}> </span>{google_icon}</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default Login;