import React from 'react'
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { selectUserEmail, selectUserName, selectUserPhoto } from "../features/userSlice";
function SidebarLeft() {
    const photoURL = useSelector(selectUserPhoto);
    const email = useSelector(selectUserEmail);
    const name = useSelector(selectUserName);

    return (
      <Component>
            <Sidebar>
                 <img 
                      className='background'
                      src='https://i.pinimg.com/originals/60/bf/7c/60bf7c84a3f4bb95b2a4d0697bbedbae.jpg'
                  />
          <SidebarLeftTop>
                
              <Profile>
                  
                <img
                    className='profile__pic'
                    src={photoURL}
                />
                <h2>{name}</h2>
                <h4>{email}</h4>
              </Profile>
              <Description>
                  <DescriptionOne>
                      <span className='stats'>Who's viewed your profile</span>
                      <span className='count'>69</span>
                  </DescriptionOne>

                  <DescriptionTwo>
                      <span className="stats">connections</span>
                      <span className='count'>369</span>
                  </DescriptionTwo>
              </Description>
          </SidebarLeftTop>
          
          
            </Sidebar>
            
            <SidebarBottom>
              <span className='title'>Recent</span>
              <Tags>
                  <span className='tags'>#shishu</span>
                  <span className='tags'>#abhiraj</span>
                  <span className='tags'>#india</span>
                  <span className='tags'>#hindustan</span>
                     <span className='tags'>#bihar</span>
                   
              </Tags>
          </SidebarBottom>
      </Component>
      
  )
}

export default SidebarLeft;

const Component = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.2;
   

    @media(max-width:786px){
        flex:1;
        margin: 0 8vw;
    } 
`

const Sidebar = styled.div`
margin-top: 105px;

display: flex;
flex-direction: column;
margin-left: 15px;
background-color: white ;
border-radius: 10px;
/* padding: 0 15px; */
padding-bottom :15px ;
.background{
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

    }

`

const SidebarLeftTop = styled.div`
    padding: 10px 15px;
    padding-top:0 ;

`

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    border-bottom: 0.5px solid lightgray;
    padding-bottom: 15px;
    

    h2{
        font-size: 16px;
        color: rgba(0,0,0,0.75);
        letter-spacing: 0.5px;
        margin-top:5px;
        padding: 10px 0;
        cursor: pointer;

        &:hover{
            text-decoration: underline blueviolet;

        }
    }
    h4{
        font-size: 13px;
        color: rgba(0,0,0,0.5)
    }
    
    .profile__pic{
        width:50px;
        border-radius: 50%;
        letter-spacing: 0.5px;
        margin-top: -26px;
        cursor: pointer;
    }

`
const Description = styled.div`

    display:flex;
    flex-direction: column;


`

const DescriptionOne = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    color:gray;
    padding:5px 0;

   
    .count{
        color:#2C7BCA ;
        font-weight:600;
    }


`

const DescriptionTwo = styled(DescriptionOne)`
   
    

`

const SidebarBottom = styled.div`
    display: flex;
    position: sticky;
    top:80px;
    flex-direction: column;
    margin-left:15px;
    margin-top:20px;
    background-color: white;
    padding:15px;
    border-radius:10px;

    .title{
        font-size: 13px;
    }

    @media(max-width:786px){
        display: none;
        
    } 

`

const Tags = styled.div`
    display: flex;
    flex-direction: column;
    cursor:pointer;
    margin-top:5px;
    padding:10px 5px;

    .tags{
        color:gray;
        padding: 5px 5px;
        transition: all 250ms;
        &:hover{
            background-color: lightgray;
            color:black;   
        }
    }
`