import React from 'react';
import styled from 'styled-components';
import NavOption from './NavOption';

function Header() {
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
            <NavOptions>
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
                  <NavOption
                      profileURL="https://media-exp1.licdn.com/dms/image/C5103AQHxRjbT9-tNEQ/profile-displayphoto-shrink_100_100/0/1534583386446?e=1666224000&v=beta&t=Pr6sFXtWAPReNegKza7VcRU8Pc91HkttRgpPOXsXoHo"
                      title="Me"
                  />
                  
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

`

const NavLeft = styled.div`

    display: flex;
    align-items: center;


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