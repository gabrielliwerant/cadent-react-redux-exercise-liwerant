import React from 'react';

export const ListTable = props => (
  <div className="listTable">
    <table>
      <thead>
        <tr><th>ListTable</th></tr>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Category</th>
          <th>Delivery Method</th>
        </tr>
      </thead>
      <tbody>
        {props.groceryList.map(grocery => (
          <tr key={grocery.id}>
            <td>{grocery.id}</td>
            <td>{grocery.name}</td>
            <td>{grocery.category}</td>
            <td>{grocery.deliveryMethod}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ListTable
