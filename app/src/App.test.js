import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//to solve enzyme internal error
configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('should be defined', () => {
    expect(App).toBeDefined()
  })

  it('should render correctly', () => {
    const app = shallow(<App />)
    expect(app).toMatchSnapshot()
  })
})