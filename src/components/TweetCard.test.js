import React  from 'react';
import TweetCard from './TweetCard';


import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() })

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));

it('renders correctly enzyme', () => {
    const wrapper = shallow(<TweetCard />)

    expect(toJson(wrapper)).toMatchSnapshot();
});

