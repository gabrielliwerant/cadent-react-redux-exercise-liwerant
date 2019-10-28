import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './components/ListContainer';
import { Provider } from "react-redux";
import configureStore from "./store/configure-store";

const store = configureStore();

describe('<ListContainer />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><ListContainer /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
