import React, { Component } from 'react';
import styled from 'styled-components';

import DropDown from './DropDown';

const Wrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <DropDown />
      </Wrapper>
    );
  }
}

export default App;
