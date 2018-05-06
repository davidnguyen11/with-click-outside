# withClickOutside

[![Build Status](https://travis-ci.org/davidnguyen179/with-click-outside.svg?branch=master)](https://travis-ci.org/davidnguyen179/with-click-outside) [![codecov](https://codecov.io/gh/davidnguyen179/with-click-outside/branch/master/graph/badge.svg)](https://codecov.io/gh/davidnguyen179/with-click-outside)

The High Order Component which allows you to detect the current click is outside or inside of a component.

![dropdown-demo](https://user-images.githubusercontent.com/6290720/39672342-d61c56a6-5152-11e8-86ac-59d9a058d331.gif)


## Table Content

 - [Installation](https://github.com/davidnguyen179/with-click-outside#installation)
 - [Parameters](https://github.com/davidnguyen179/with-click-outside#parameters)
 - [Usage](https://github.com/davidnguyen179/with-click-outside#usage)
 - [Examples](https://github.com/davidnguyen179/with-click-outside#examples)

## Installation

**npm**
```bash
npm i with-click-outside
```

**yarn**
```bash
yarn add with-click-outside
```

## Parameters

**withClickOutside** retrieves 2 params.

### React Component
> `node`

### id
> `string`

## Usage

```js
import withClickOutside from 'with-click-outside';
import Component from './Component';

const WrappedComp = withClickOutside(Component, 'id_of_component');
```

You can check out the basic demo here: [https://codesandbox.io/s/yj9m75734j](https://codesandbox.io/s/yj9m75734j)

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

## Examples
- [DropDownList](https://github.com/davidnguyen179/with-click-outside/tree/master/examples/dropdownlist)
