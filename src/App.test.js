import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import Comments from './Comments'
import NewComment from './NewComment'

describe('<App>', () => {
  it('renders without crashing', () => {
    const database = {
      ref: jest.fn()
    }
    database.ref.mockReturnValue({
      on: jest.fn()
    })
    const wrapper = shallow(<App database = { database }/>)
    expect(wrapper.find(Comments).length).toBe(1)
    expect(wrapper.find(NewComment).length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })
  it('add a new comment', () => {
    const database = {
      ref: jest.fn()
    }
    const child = jest.fn()
    const update = jest.fn()
    database.ref.mockReturnValue({
      on: jest.fn(), 
      child, 
      update
    })
    const push = jest.fn()
    child.mockReturnValue({
      push
    })
    push.mockReturnValue({
      key: '1'
    })

    
    const wrapper = shallow(<App database = { database }/>)
    wrapper.instance().sendComment('new Comment')
    // console.log(child.mock.calls)
    expect(child).toBeCalledWith('comments')
    // console.log(update.mock.calls)
    expect(update).toBeCalledWith({
      'comments/1': {
        comment: 'new Comment'
      }
    })
    
  })
})
