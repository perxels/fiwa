import styled from 'styled-components';

import Home from "./pages/Home";

import PageBg from './assets/img/bg.png'

function App() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background: black url(${PageBg}) repeat;
  min-height: 200vh;
  position: relative;
`