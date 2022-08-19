import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import SidebarLeft from './SidebarLeft';

function Home() {
  return (
    <Component>
      <Header />
      <Container>
        <SidebarLeft />  
      </Container>
    </Component>
  )
}

export default Home;

const Component = styled.div``

const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`