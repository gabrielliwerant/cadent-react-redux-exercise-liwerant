import React from 'react';

export const ListTable = ({ groceryList, removeItem }) => (
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
          <tr key={item.id}>
            <td><button onClick={() => removeItem(item.id)}>Remove</button></td>
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

export default ListTable
