import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import SidebarLeft from './SidebarLeft';
import Feed from './Feed';

function Home() {
  return (
    <Component>
      <Header />
      <Container>
        <SidebarLeft />  
        <Feed />
      </Container>
    </Component>
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