import React from 'react';

export const ListTable = ({
  groceryList,
  removeItem,
  selectItem,
  isItemSelected,
  selectedItem,
  deselectItem
}) => {
  const handleRemoveItem = id => e => {
    e.stopPropagation();

    // For the sake of UX, remove from selected items if it exists there
    if (isItemSelected && selectedItem.id === id) deselectItem();

    removeItem(id);
  };

  const handleSelectItem = id => e => {
    e.stopPropagation();

    if (isItemSelected && selectedItem.id === id) deselectItem();
    else selectItem(id);
  };

  return (
    <div className="listTable">
      <table>
        <thead>
          <tr><th>ListTable</th></tr>
          <tr>
            <th>Actions</th>
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Delivery Method</th>
          </tr>
        </thead>
        <tbody>
          {groceryList.map(item => (
            <tr
              key={item.id}
              style={selectedItem.id === item.id ? { background: 'gray', color: 'white' } : null}
              onClick={handleSelectItem(item.id)}
            >
              <td><button onClick={handleRemoveItem(item.id)}>Remove</button></td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.deliveryMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTable
