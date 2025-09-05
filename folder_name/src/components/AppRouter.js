import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import { privateRouotes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import Login from './Login';
import Chat from './Chat';


const AppRouter = () => {
    const user = false

    return  user ?  ( 
       
        <Routes>
            {privateRouotes.map(({path, Component}) => 
                <Route key={path} path={path} element={Component}/>
            )}
            <Route path='*' element={<Chat/>} />
        </Routes>
        
     ) : (
        <Routes>
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={Component}/>
            )}
            <Route path='*' element={<Login/>} />
       </Routes>)
}
 
export default AppRouter;