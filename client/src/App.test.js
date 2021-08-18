import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { App } from './App.js';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import AddActivity from './components/AddActivity/AddActivity';
import Detail from './components/Detail/Detail';

configure({adapter: new Adapter()});

describe('App', () => {
  let store
  const middlewares = []
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });

  describe('El componente Main debe renderizar en todas las rutas.', () => {
    it('Debería renderizarse en la ruta "/main"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/main' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(Main)).toHaveLength(1);
    });
    it('Debería renderizarse en la ruta "/main/otraRuta"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/main/otraRuta' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(Main)).toHaveLength(1);
    });
  });

  it('El componente Home debe renderizar en la ruta / (Sólo en la ruta "/")', () => {
    const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[ '/' ]}>
            <App />
          </MemoryRouter>
        </Provider>
    );

      expect(wrapper.find(Home)).toHaveLength(1);
      expect(wrapper.find(Main)).toHaveLength(0);
      expect(wrapper.find(AddActivity)).toHaveLength(0);
  });

  it('El componente AddActivity debe renderizar en la ruta /addactivity - este test no pasará si Otro componente se renderiza en esta ruta.', () => {
    const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/addactivity' ]}>
            <App />
          </MemoryRouter>
        </Provider>
    );
    expect(container.find(<AddActivity/>)).toHaveLength(1);
    expect(container.find(<Home/>)).toHaveLength(0);
    expect(container.find(<Main/>)).toHaveLength(0);
  });

})
