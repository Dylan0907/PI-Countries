import React from 'react';
import { shallow, mount, render,configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import SearchBar from './SearchBar';

configure({adapter: new Adapter()});

describe('<SearchBar />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<SearchBar />)
  })
  it('Renderiza un <form>', () => {
      expect(wrapper.find('form')).toHaveLength(1)
    })
  it('It should render a button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('It should render an input field', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });
  it('Un componente Todos deberia recibir como prop status con el valor "Todo"', () => {
    expect(wrapper.contains('input[type="text"]')).toEqual(true);
  })
  it('Un componente Todos deberia recibir como prop status con el valor "Todo"', () => {
    expect(wrapper.contains('button[type="submit"]')).toEqual(true);
  })
})
