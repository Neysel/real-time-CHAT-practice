import React, { useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import {useAuthState} from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore"
import { ContextFire } from '..';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Loader from './Loader';
import { addDoc, collection, serverTimestamp, query, orderBy } from 'firebase/firestore'; // Import firestore functions
import 'firebase/compat/firestore'; // For compatibility library
import 'firebase/compat/auth'; // For compatibility library
import Avatar from '@mui/material/Avatar';
 

const Chat = () => {
      const {auth, firestore} = useContext(ContextFire)
    const [user, loading, error] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, messagesLoading] = useCollectionData(
        //   firestore.collection('message').orderBy('createdAt')
        query(collection(firestore, 'message'), orderBy('createdAt'))
    )

    const sendMessage = async () => {
        // firestore.collection(firestore, 'message').add({
        const docRef = await addDoc(collection(firestore, 'message'), {
            uid: user.uid, 
            displayName: user.displayName,
            photoUrl: user.photoURL, 
            text: value, 
            // createdAt: firebase.firestore.FieldValue.serverTimestamp()
            createdAt: serverTimestamp()
                })
                setValue('')

    }
if (loading || messagesLoading) {
    return <Loader/>
}

    return ( 
        <Container>
           <Grid container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto'}}> 
                    {messages && messages.map(msg => (
                        <div style={{
                            margin: 10,
                            // border: user.uid === messages.uid ? '2px solid green' : '2px dashed red', 
                          
                           width: '95%',
                           padding: 5
                        }}>
                            <Grid 
                            style={{
                                width: 'fit-content',
                                 marginLeft: user.uid == msg.uid ? 'auto' : '10px', 
                            }}>
                                  <Avatar src={msg.photoUrl}/>
                            <div>{msg.displayName}</div>
                            
                            </Grid>
                            <div 
                            style={{ width: 'fit-content',marginLeft: user.uid == msg.uid ? 'auto' : '10px', }}
                            >{msg.text}</div>
                        </div>
                    ))}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={'flex-end'}
                    style={{width: '80%'}}
                    >
                        <TextField 
                        fullWidth
                        maxRows ={2}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />
                        <Button onClick={sendMessage}>SEND</Button>
                </Grid>
               
                </Grid>
        </Container>
     );
    }
 
export default Chat;