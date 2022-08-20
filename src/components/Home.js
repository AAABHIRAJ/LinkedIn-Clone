import React, { useEffect } from 'react';
import Header from './Header';
import styled from 'styled-components';
import SidebarLeft from './SidebarLeft';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUserName } from "../features/userSlice"
import Login from './Login';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Widget from './Widget';



function Home() {
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();
    // const user = null;
    

    console.log("Current logged in user>>>>", userName);
    
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user => {
            if (user) {
                dispatch(login({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
            }
        }))

    }, []);


    return (
        <>
            {!userName ? <Login /> : 
            <Component>
                <Header />
                <Container>
                    <SidebarLeft />  
                    <Feed />
                    <Widget />
                </Container>
            </Component>
         }
        </>
        
        
        
    
  )
}

export default Home;

const Component = styled.div``

const Container = styled.div`
    display: flex;
    flex: 1;

    @media(max-width:786px){
        flex-direction: column;
    }
`