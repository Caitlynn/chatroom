import React from 'react';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as apiService from '../api_service'
import MessageComposer from './MessageComposer'

//to solve enzyme internal error
configure({ adapter: new Adapter() })

describe('Message Composer', () => {
  it('should be defined', () => {
    expect(MessageComposer).toBeDefined()
  })

  it('should render correctly', () => {
    const messageComposer = shallow(<MessageComposer username='test user'/>)
    expect(messageComposer).toMatchSnapshot()
  })

  it('should call api when form is submitted', () => {
    apiService.createMessage = jest.fn()
    const messageComposer = shallow(<MessageComposer username='test user' />)
    const mockEvent = { preventDefault: jest.fn() }
    messageComposer.find('.Message-composer_form').simulate('submit', mockEvent)
    expect(mockEvent.preventDefault.mock.calls.length).toBe(1)
    expect(apiService.createMessage.mock.calls.length).toBe(1)
  })
})