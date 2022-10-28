import React  from 'react';
import Dropdown from './Dropdown';


import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() })

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));

it('renders correctly enzyme', () => {
    const wrapper = shallow(<Dropdown />)

    expect(toJson(wrapper)).toMatchSnapshot();
});

