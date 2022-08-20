import React from 'react';
import styled from 'styled-components';

function Widget() {

    function createDetail(imgurl, name, details) {
        return <Company>
                <img src={imgurl} alt="" />
                <Detail>
                    <h2>{name}</h2>
                    <p>{details}</p>
                    <span>+ Follow</span>
                </Detail>
            </Company>
    }
  return (
    <Component>
        <Top>
            <span>Add to your feed</span>
              {createDetail(
                  "https://media-exp1.licdn.com/dms/image/C560BAQHRO9T5YA3ouQ/company-logo_100_100/0/1657037248681?e=1669248000&v=beta&t=E-BPWc6ij4jqE0UtvSTsjceY6FTZVkfknPfJAt7ynGM",
                  "Cognizant",
                  "Company.Information Technology and Services"

              )}
              {createDetail(
                  "https://media-exp1.licdn.com/dms/image/C4E0BAQFZS4o7giL0LQ/company-logo_100_100/0/1639980679933?e=1669248000&v=beta&t=0SFt0HbOhG-RXv_HRM06fI6PSgbLuYRbp7wmQ2GEKRs",
                  "Cognizant",
                  "Company.Information Technology and Services"

              )}
              {createDetail(
                  "https://media-exp1.licdn.com/dms/image/C560BAQHneWLNCPQgDA/company-logo_100_100/0/1641202397642?e=1669248000&v=beta&t=Jr8z4eq6whXEBrItDD80YSOn73ox4rLrzd8M2zCcue4",
                  "Cognizant",
                  "Company.Information Technology and Services"

              )}
              
              <Description>
                <p>View all recommendations </p>
                <img src='images/Arrow.svg' />
              </Description>
              
        </Top>
    </Component>
  )
}

export default Widget;


const Component = styled.div`
    display: flex;
    position: sticky;
    top:80px;
    flex:0.2;
    background-color: white;
    height: fit-content;
    margin-left: 20px;
    margin-right: 10px;
    margin-top: 105px;
    padding: 10px 15px;
    border-radius: 10px;
    color:rgba(0,0,0,0.8);

    @media(max-width:768px){
        display: none;
    }

`

const Top = styled.div`
    display: flex;
    flex-direction: column;

    span{
        margin-bottom: 20px;
        font-weight:600;
        letter-spacing: 0.2px;
    }
`

const Company = styled.div`

display:flex;

img{
    height:50px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;

}

`

const Detail = styled.div`

display:flex;
flex-direction: column;
margin-left:20px;

h2{
    font-size: 14px;
    letter-spacing: 0.5px;
    cursor: pointer;

}
p{
    font-size: 13px;
    color: gray;
    margin-top: 5px;
    cursor: pointer;

}
span{
    color:gray;
    cursor: pointer;
    margin-top: 10px;
    padding: 7px 20px;
    border: 1px solid gray;
    width:fit-content;
    border-radius: 25px;
    transition: all 250ms;

    &:hover{
        background-color: rgba(0,0,0,0.07);
        border: 2px solid rgba(0,0,0,0.8);
    }
}
`

const Description = styled.div`
    display: flex;
    cursor: pointer;
    width: fit-content;
    padding: 7px 12px;
    border-radius: 5px;
    transition: all 250ms;

    &:hover{
        background-color: rgba(0,0,0,0.07);
    }

    p{
        margin-right:7px;
        font-weight: 600;
        color:gray;
        font-size:14px;
        letter-spacing: 0.3px;
    }

    img{
        opacity:0.5;
    }
`