import React from 'react';
import styled from 'styled-components';

function NavOption({ imgURL, title, profileURL }) {
  return (
    <Component>
          {imgURL && <img className='icon__img' src={imgURL} />}
          {profileURL && <img className="profile__img" src={profileURL} />}
          <span>{title}</span>

    </Component>
  )
}

export default NavOption;

const Component = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: gray;
padding: 0 15px;
cursor: pointer;

@media(max-width:768px){
    padding: 0 10px;

}

span{
    font-size: 12px;
    letter-spacing: 0.5px;

    @media(max-width:900px){
        display: none;
        align-items: center;
        margin-top: 0mm;
    }
}

.icon__img{
    opacity: 0.6;
    margin-bottom: 2px;
}

.profile__img{
    height: 28px;
    border-radius: 999px;
}

&:hover{
    color: black;
    .icon__img{
    opacity: 1;
}
}
`
