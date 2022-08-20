import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import styled from 'styled-components';
import Post from './Post';
import { collection, getDocs } from 'firebase/firestore';
import db from "../firebase";
import { addDoc,query, orderBy, serverTimestamp } from 'firebase/firestore';

function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    const sendPost = (e) => {
        e.preventDefault();
        const postsref = collection(db, "posts");
        addDoc(postsref, {
            image: "",
            name: "Shishu Kumar",
            detail: "Hello Dear",
            content: { input },
            timestamp: serverTimestamp(),
        });

        setInput("");
    }
    useEffect(() => {

            const postsref = collection(db, "posts");
            const orderedRef = query(postsref, orderBy("timestamp", "desc"))

            getDocs(orderedRef)
                .then((snapshot) => {
                        setPosts(
                    snapshot.docs.map((doc) => 
                            ({
                            id: doc.id,
                            data:doc.data(),
                            })
                        )
                )
            })

    }, [posts]);
    console.log(posts);

    
    
    return (
      <Component>
            <CreatePost>
                <CreatePostTop>
                    <Avatar className='avatar__img' src="https://media-exp1.licdn.com/dms/image/C5103AQHxRjbT9-tNEQ/profile-displayphoto-shrink_100_100/0/1534583386446?e=1666224000&v=beta&t=Pr6sFXtWAPReNegKza7VcRU8Pc91HkttRgpPOXsXoHo" />
                    <form >
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="Start a Post"
                        />
                        <button onClick={sendPost} type='submit'>Post</button>
                    </form>
                </CreatePostTop>
                <CreatePostBottom>
                    <Functions>
                        <span>Photo</span>
                        <span>video</span>
                        <span>Event</span>
                        <span>Write article</span>
                    </Functions>
                </CreatePostBottom>
            </CreatePost>
            <Post
                image="https://www.behindwoods.com/tamil-actress/disha-patani/disha-patani-stills-photos-pictures-219.jpg"
                name="Abhiraj Kumar"
                details="Hi dear"
                content="SVG elements should be scaled for a 24x24px viewport so that the resulting icon can be used as is, or included as a child for other MUI components that use icons. This can be customized with the viewBox attribute. To inherit the viewBox value from the original image, the inheritViewBox prop can be used."
            />
            {posts?.map(({id, data:{name, detail,image, content }}) => {
                return (<Post
                image={image}
                key={id}
                name={name}
                details={detail}
                content={content.input}
            />)
            })}
            
      </Component>
      
  )
}

export default Feed;
const Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0.6;
    margin:0 15px;
    margin-top:105px;

    @media(max-width:786px){
        flex:1;
        margin: 75px 8vw;
    } 

`

const CreatePost = styled.div`
    background-color: white;
    width: 100%;
    padding: 10px;
    height: fit-content;
    border-radius: 5px;
    max-width: 700px;

`

const CreatePostTop = styled.div`
    display: flex;
    align-items: center;

    

    .avatar__img{
        margin-right: 10px;
        cursor: pointer;
    }

    form{
        border: 1px solid lightgray;
        padding: 10px;
        border-radius: 28px;
        transition: all 200ms;
        flex:1;

        cursor: pointer;
        input{
            border:none;
            width:100%;
            outline:none;
            background-color: transparent;
        }
        button{
            display: none;
        }
        &:hover{
        background-color: rgba(0,0,0,0.06);
    }
    }
    

`

const CreatePostBottom = styled.div`
    margin: 5px 0 ;
    
`

const Functions = styled.div`
    display: flex;
    justify-content: space-evenly;
    color:gray;

    span{
        padding: 10px 20px;
        border-radius: 10px;
        cursor: pointer;

        &:hover{
            background-color: lightgray;
            color:black;
        }
    }
`
