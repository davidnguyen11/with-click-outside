# withClickOutside

The High Order Component which allows you to detect the current click is outside or inside of a component.

## Table Content

 - Installation
 - Usage
 - Example

## Installation

**npm**
```bash
npm i with-click-outside
```

**yarn**
```bash
yarn add with-click-outside
```

## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';

import withClickOutside from 'with-click-outside';

class DropDown extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.outside !== this.props.outside) {
      this.setState({
        open: !nextProps.outside,
      });
    }
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    const { outside, id } = this.props;
    return (
      <div>
        <p>{outside ? 'outside' : 'inside'}</p>
        <div id={id}>
          <button onClick={this.toggle}>toggle</button>
          {open &&
            !outside && (
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
              </ul>
            )}
        </div>
      </div>
    );
  }
}
const WrappedDropDown = withClickOutside(DropDown, 'idDropDown');
ReactDOM.render(<WrappedDropDown />, document.getElementById('root'));
```

