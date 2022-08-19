import React from 'react';
import styled from "styled-components";

function Login() {
  return (
    <Component>
        <Nav>
              <img
                  src='images/login-logo.svg'
              />

              <SignUp>
                  <span>Join now</span>
                  <a href=''>Sign in</a>
              </SignUp>
          </Nav>
          
          <Details>
              <Heading>Welcome to your professional community</Heading>
              <img
                  src='images/login-hero.svg'
              />
              
          </Details>
          
          <Google>
                <img 
                    src='images/google.svg'
                />
                <span>Sign in with Google</span>
         </Google>
    </Component>
  )
}

export default Login;

const Component = styled.div`

`

const Nav = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width:135px;
        padding:20px  20px;
        padding-left: 13vw;

        cursor: pointer;

        @media (max-width: 768px){
            width:85px;
            padding:30px  20px;
            cursor: pointer;
        }
    }
`

const SignUp = styled.div`
    padding: 0 20px;
    span{
        padding:15px 25px;
        margin-right:10px;
        cursor: pointer;
        color: rgba(0,0,0,0.7);
        font-weight: 550;
        letter-spacing: 0.7px;
        font-size: 14px;


        &:hover{
            background-color: rgba(0,0,0,0.08);
            color: rgba(0,0,0,0.8);
            border-radius: 28px;
        }

       
    }

    a{
        text-decoration: none;
        font-weight: bold;
        font-size: 14px;
        margin-right: 10vw;
        letter-spacing: 0.5px;
        color: #0A66C2;
        border: 1px solid #0A66C2 ;
        padding: 14px 25px ;
        border-radius: 28px;

        &:hover{
            background-color: rgba(190, 219, 248, 0.3);
            color:rgba(0, 0, 139,0.8);
        }

        @media (max-width: 768px){
            padding:15px 25px;
            margin-right:10px;


        }
    }

`

const Details = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    flex-wrap: wrap;

    img{
        position: absolute;
        top:80px;
        right: -80px;
        height: 500px;
        width: 700px;
        margin-left: 40px;

        @media (max-width: 768px){
            top: 25vw;
            right: 0px;
            left: 12vw;
            margin-left:0;
            width: 70vw;
            height: initial;
           
            
        }
    }

    @media (max-width: 768px){
            display: flex;
            align-items: center;
            justify-content: center;
            
        }
`

const Heading = styled.div`
    font-size: 56px;
    width: 55%;
    color: #8F5849;
    font-weight: lighter;
    margin-left: 13vw;
    margin-top: 9vw;

    @media (max-width: 768px){
            font-size: 30px;
            width: 100%;
            margin-left: 20px;


        }

`

const Google = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    border:1px solid black;
    border-radius: 28px;
    font-size: large;
    color: rgba(0,0,0,0.7);
    cursor: pointer;
    margin-left: 13vw;
    margin-top: 40px;
    padding: 15px 80px;
    transition: all 250ms;

    &:hover{
        background-color: rgba(0,0,0,0.1);
        color: black;
        border: 2px solid black;

    }
    /* background-color: #2977C9; */

    @media(max-width:768px){

        top: 120vw;
        justify-content: center;
        right: 5vw;
        left: 5vw;
        margin-left: 0;
        margin-top: 0;
        

    }

    span{
        margin-left: 5px;
    }

   

`

