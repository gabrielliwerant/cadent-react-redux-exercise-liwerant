import React from 'react';
import ReactDOM from 'react-dom';
import ListTable from '../components/ListTable';
import { initialState, removeItem, selectItem, deselectItem } from '../ducks/groceries';

describe('<ListTable />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ListTable
        groceryList={initialState.list}
        removeItem={removeItem}
        selectItem={selectItem}
        deselectItem={deselectItem}
        isItemSelected={initialState.isItemSelected}
        selectedItem={initialState.selectedItem}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
