import React from 'react';
import ReactDOM from 'react-dom';
import ListSelection from './components/ListSelection';
import { initialState } from './ducks/groceries';

describe('<ListSelection />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ListSelection
        isItemSelected={initialState.isItemSelected}
        selectedItem={initialState.selectedItem}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
