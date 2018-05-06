import React from 'react';

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16
import Enzyme, { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-15';

import DropDown from '../../DropDown';
import withClickOutside from '../';

const { describe, it } = global;
Enzyme.configure({ adapter: new Adapter() });

describe('WrappedComponent', () => {
  it('Test WrappedComponent', () => {
    const NewDropDown = withClickOutside(DropDown, 'idDropDown');
    const div = global.document.createElement('div');
    global.document.body.appendChild(div);
    const wrapper = mount(<NewDropDown />, { attachTo: div });

    expect(wrapper.children().props().outside).toBe(false);
    expect(wrapper.children().props().id).toBe('idDropDown');

    const btnDropDown = wrapper.find('#btnDropDown');
    btnDropDown.simulate('click');

    // Open drop down list items
    const expectHtmlDropDown =
      '<div><button id="btnOutside">outside</button><div id="idDropDown" style="display: inline-block; background: orange;"><button id="btnDropDown">DropDown Button</button><div><button id="button_1">1</button><button id="button_1">2</button><button id="button_1">3</button><button id="button_1">4</button></div></div></div>';
    expect(wrapper.html()).toBe(expectHtmlDropDown);

    // Clicking drop down item
    const item1 = wrapper.find('#button_1').at(0);
    item1.simulate('click');
    expect(wrapper.html()).toBe(expectHtmlDropDown);

    const btnOutside = wrapper.find('#btnOutside');
    btnOutside.simulate('click');

    const componentWillReceivePropsSpy = spy(
      DropDown.prototype,
      'componentWillReceiveProps',
    );

    expect(DropDown.prototype.componentWillReceiveProps.calledOnce).toBe(false);
    wrapper.setProps({
      outside: true,
    });
    expect(DropDown.prototype.componentWillReceiveProps.calledOnce).toBe(true);

    const expectHtml =
      '<div><button id="btnOutside">outside</button><div id="idDropDown" style="display: inline-block; background: orange;"><button id="btnDropDown">DropDown Button</button></div></div>';
    expect(wrapper.html()).toBe(expectHtml);

    expect(wrapper.children().props().outside).toBe(true);
    expect(wrapper.children().props().id).toBe('idDropDown');

    // reset componentWillReceivePropsSpy
    componentWillReceivePropsSpy.restore();
  });
});
