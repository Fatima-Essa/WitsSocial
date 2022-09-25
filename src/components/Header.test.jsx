import React  from 'react';
import Header from './Header';


import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import renderer from 'react-test-renderer'
import button from '../components/Header'

Enzyme.configure({ adapter: new Adapter() })

it('renders correctly enzyme', () => {
    const wrapper = shallow(<Header />)

    expect(toJson(wrapper)).toMatchSnapshot();
});

describe('<button />', () => {
    it('Should render correctly', () => {
        const component = renderer.create(<button />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })


})