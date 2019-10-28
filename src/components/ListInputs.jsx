import React from 'react';
import PropTypes from 'prop-types';

export const ListInputs = ({ addItem }) => {
  const createItem = () => {
    // KLUDGE: Create new "unique" ids to prevent id clashes. We should
    // ideally be using more certain random id creation with uuids or
    // something similar.
    const id = Math.floor(Math.random() * Math.floor(1000));

    const item = {
      id,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
    }

    addItem(item);
  }

  return (
    <button
      className="addItemButton"
      onClick={createItem}
    >
      Add Random Item
    </button>
  );
};

ListInputs.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default ListInputs;
