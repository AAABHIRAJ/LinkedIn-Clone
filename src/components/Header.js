import React from 'react';
import styled from 'styled-components';
import NavOption from './NavOption';
import { getAuth, signOut } from "firebase/auth";
import { logout, selectUserPhoto } from "../features/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const photoURL = useSelector(selectUserPhoto)


    const signoutLinkedin = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                dispatch(logout({
                    name: null,
                    email: null,
                    photo: null,
                }))
            });
        
        navigate("/");
    }
  return (
    <Nav>

        <NavLeft>
              <img src='images/linkedin.png' />
              <SearchBar>
                  <img src='images/search-icon.svg' />
                  <input type="text" placeholder='search' />
              </SearchBar>
        </NavLeft>
          
        <NavRight>
            <NavOptions >
                  <NavOption
                      imgURL="images/nav-home.svg"
                      title="Home"
                  />
                  <NavOption
                      imgURL="images/nav-network.svg"
                      title="My Network"
                  />
                  <NavOption
                      imgURL="images/nav-jobs.svg"
                      title="Jobs"
                  />
                  <NavOption
                      imgURL="images/nav-messaging.svg"
                      title="Messaging"
                  />
                  <NavOption
                      imgURL="images/nav-notifications.svg"
                      title="Notifications"
                  />
                  <a onClick={signoutLinkedin}>
                  <NavOption
                          profileURL={photoURL}
                          title="Me"
                          alt="Logout"
                  />
                  </a>
                  
                  
            </NavOptions>
        </NavRight>
    </Nav>
  )
}

export default Header;

const Nav = styled.div`

    position:fixed;
    width:100vw;
    display: flex;
    border-bottom: 0.01px solid lightgray;
    padding: 10px;
    background-color: white;
    justify-content: space-evenly;
    z-index: 999;

`

const NavLeft = styled.div`

    display: flex;
    align-items: center;
    img{
        cursor: pointer;
    }

`



const NavRight = styled.div`

`

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    background-color: #EEF3F8;
    border-radius: 4px;
    color: gray;
    margin-left: 10px;
    width:300px;
    padding: 10px;

    input{
        outline: none;
        border: none;
        background-color: transparent;
        margin-left: 10px;

    }

    img{
        opacity: 0.5;
        margin-left: 15px;
    }

    @media(max-width:786px){
        display: none;
    }

`

const NavOptions = styled.div`
    display: flex;
`