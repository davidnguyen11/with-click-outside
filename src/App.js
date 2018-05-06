import React, { Component } from 'react';
import DropDown from './DropDown';
import withClickOutside from './withClickOutside';

const NewDropDown = withClickOutside(DropDown, 'idDropDown');

class App extends Component {
  render() {
    return (
      <div>
        <NewDropDown />
      </div>
    );
  }
}

export default App;
