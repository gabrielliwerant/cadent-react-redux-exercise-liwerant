import React from 'react';
import ReactDOM from 'react-dom';
import ListInputs from '../components/ListInputs';
import { addItem } from '../ducks/groceries';

describe('<ListInputs />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListInputs addItem={addItem} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
