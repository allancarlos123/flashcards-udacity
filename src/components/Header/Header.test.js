import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header title="asdisd" />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});