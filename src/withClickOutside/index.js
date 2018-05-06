import React from 'react';
import contains from './contains';

function withClickOutside(Child, targetName) {
  class WrappedComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        outside: false,
      };
    }

    componentDidMount() {
      if (!document.getElementById(targetName)) {
        throw new Error('withClickOutside - Missing "id" of element');
      }
      document.addEventListener('click', this.detectClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.detectClickOutside);
    }

    detectClickOutside = e => {
      const parent = document.getElementById(targetName);
      if (!contains(parent, e.target)) {
        this.setState({ outside: true });
      } else {
        this.setState({ outside: false });
      }
    };

    render() {
      return <Child {...this.state} {...this.props} id={targetName} />;
    }
  }
  return WrappedComponent;
}

export default withClickOutside;
