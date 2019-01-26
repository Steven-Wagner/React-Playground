import React from 'react';
import ReactDOM from 'react-dom'
import Counter from './Counter';
import renderer from 'react-test-renderer'

describe(`Counter Component`, () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Counter />, div);
      ReactDOM.unmountComponentAtNode(div);
    })
})