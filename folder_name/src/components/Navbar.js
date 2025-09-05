import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {useAuthState} from "react-firebase-hooks/auth"
import { ContextFire } from '..';

const Navbar = () => {
    // const user = false
    const {auth} = useContext(ContextFire)
    const [user] = useAuthState(auth)


    return ( 
        
        <AppBar color={"secondary"} position="static">
  <Toolbar variant="dense" justify={"flex-end"} style={{justifyContent: "flex-end"}}>
        <Grid container  style={{justifyContent: "flex-end"}}>
            {user ? 
            <Button variant={"outlined"} style={{color: "black", borderColor: "black" }} >Logout</Button>
            :     
            <Button variant={"outlined"} style={{color: "black", borderColor: "black", marginRight: "5px"}} >Login</Button>
        }
          
            
        </Grid>
  </Toolbar>
</AppBar>
     );
}
 
export default Navbar;