import React from 'react';

import styled from 'styled-components';

import withClickOutside from 'with-click-outside';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  * {
    box-sizing: border-box;
  }
`;

const DropDownButton = styled.button`
  color: #fff;
  cursor: pointer;
  background-color: #545b62;
  border-color: #4e555b;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const DropDownMenu = styled.div`
  position: absolute;
  transform: translate3d(0px, 38px, 0px);
  top: 0px;
  left: 0px;
  will-change: transform;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;

const DropDownItem = styled.a`
  display: block;
  cursor: pointer;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  text-decoration: none;

  &:hover {
    color: #16181b;
    text-decoration: none;
    background-color: #f8f9fa;
  }
`;

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
        <Wrapper id={id}>
          <DropDownButton onClick={this.toggle}>Dropdown button</DropDownButton>
          {open &&
            !outside && (
              <DropDownMenu>
                <DropDownItem>item 1</DropDownItem>
                <DropDownItem>item 2</DropDownItem>
                <DropDownItem>item 3</DropDownItem>
              </DropDownMenu>
            )}
        </Wrapper>
      </div>
    );
  }
}
const WrappedDropDown = withClickOutside(DropDown, 'idDropDown');
export default WrappedDropDown;
