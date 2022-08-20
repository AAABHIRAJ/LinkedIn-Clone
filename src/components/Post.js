import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

function Post({name, details, content, image}) {
  return (
    <Component>
        <Header>
              <Avatar src="" />
              <Details>
                  <span className='name'>{name}</span>
                  <span className='bottom'>{details}</span>
              </Details>

              
          </Header>
          
          <PostContent>
              <span>{ content }</span>
            </PostContent>
            <PostImage>
                  {image &&
                  <img
                      className='post__image'
                      src={image}
                      />
                  }
          </PostImage>
          <Buttons>
              <Like>
                  <img
                      src='images/like-button.svg'
                  />
                  <span>Like</span>
              </Like>
              <Comment>
                <img
                    src='images/comment.svg'
                  />
                  <span>Comment</span>

              </Comment>
              <Share>
                <img
                    src='images/share.svg'
                  />
                  <span>Share</span>

              </Share>
              <Send>
                <img
                    src='images/send-button.svg'
                  />
                  <span>Send</span>

              </Send>
          </Buttons>
    </Component>
  )
}

export default Post;

const Component = styled.div`
    background-color: white;
    margin-top: 20px;
    border-radius: 10px;
    padding:10px;
    width:100%;
    max-width: 700px;

`

const Header = styled.div`

    display:flex;
    align-items: center;
    margin-bottom:20px;


`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    .name{
        font-weight:600;
        letter-spacing: 0.2px;

    }

    .bottom{
        font-size:12px;
        letter-spacing: 0.5px;
        color:gray;
    }

`

const PostContent = styled.div`

    span{
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.2px;
    }

    margin-bottom: 15px;

`

const PostImage = styled.div`

    .post__image{
        max-height: 600px;
        width:100%;
        object-fit: cover;
    }
    

`

const Buttons = styled.div`
    border-top: 1px solid lightgray;
    margin-top: 10px;
    padding: 3px 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`

const Like = styled.div`
    display: flex;
    align-items: center;
    color:gray;
    cursor:pointer;
    padding:15px 25px;
    border-radius:6px;
    
    &:hover{
        background-color: rgba(0,0,0,0.07);
    }

    img{
        opacity:0.5;
    }
    span{
        margin-left:7px;
    }
`

const Comment = styled(Like)``

const Share = styled(Like)``

const Send = styled(Like)``

