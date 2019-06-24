import React from 'react'
import Comment from './Comment'
import { render } from 'enzyme'

it('should render text', () => {
    const comment = {
        comment: 'teste'
    }
    const wrapper = render(<Comment c={comment} />)
    expect(wrapper.text()).toBe("Comentario: teste")
})
it('should render empty', () => {
  
    const wrapper = render(<Comment  />)
    expect(wrapper.text()).toBe("Comentario: vazio")
})