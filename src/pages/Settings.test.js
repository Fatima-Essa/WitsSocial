import React  from 'react';
import Settings from './Settings.jsx';


import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReactDOM from "react-dom";
import SavedPosts from "./SavedPosts";

Enzyme.configure({ adapter: new Adapter() })


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())

}));

it('renders correctly enzyme', () => {
    const wrapper = shallow(<Settings />)

    expect(toJson(wrapper)).toMatchSnapshot();
});
it("renders a place", () => {
    const placeholder_text = "Enter your email";
    const wrapper = shallow(<input placeholder={placeholder_text} />);
    expect(wrapper.prop("placeholder")).toEqual(placeholder_text);
});
it("should render a correct type", () => {
    const type = undefined;
    const wrapper = shallow(<input type={type} />);
    expect(wrapper.prop("submit")).toEqual(type);
});
it('should render a button with the class of primary', () => {
    render(<button />)
});