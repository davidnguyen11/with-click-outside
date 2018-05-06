import React from 'react';

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16
import Enzyme, { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-15';

import DropDown from '../../DropDown';
import withClickOutside from '../';

const { describe, it } = global;
Enzyme.configure({ adapter: new Adapter() });

jest.mock('../contains');
import contains from '../contains';

describe('H.O.C withClickOutside', () => {
  it('withClickOutside', () => {
    const NewDropDown = withClickOutside(DropDown, 'idDropDown');
    const div = global.document.createElement('div');
    global.document.body.appendChild(div);
    const wrapper = mount(<NewDropDown />, { attachTo: div });
    expect(wrapper.state().outside).toBe(false);

    contains.mockImplementation(() => false);
    global.document.dispatchEvent(new Event('click'));
    expect(wrapper.state().outside).toBe(true);

    contains.mockImplementation(() => true);
    global.document.dispatchEvent(new Event('click'));
    expect(wrapper.state().outside).toBe(false);
  });

  it('should call componentWillUnmount', () => {
    const NewDropDown = withClickOutside(DropDown, 'idDropDown');
    const wrapper = mount(<NewDropDown />);
    const componentWillReceivePropsSpy = spy(
      NewDropDown.prototype,
      'componentWillUnmount',
    );
    wrapper.unmount();
    expect(NewDropDown.prototype.componentWillUnmount.calledOnce).toBe(true);
  });

  it('should throw exception componentDidMount', () => {
    try {
      const NewDropDown = withClickOutside(DropDown);
      const wrapper = mount(<NewDropDown />);
    } catch (e) {
      expect('withClickOutside - Missing "id" of element').toBe(
        'withClickOutside - Missing "id" of element',
      );
    }
  });
});
