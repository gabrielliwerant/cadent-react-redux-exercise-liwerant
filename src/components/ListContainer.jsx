import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addItem, removeItem, selectItem, deselectItem } from '../ducks/groceries';

import ListInputs from './ListInputs';
import ListSelection from './ListSelection';
import ListTable from './ListTable';

const mapStateToProps = ({
  groceries: {
    list: groceryList,
    isItemSelected,
    selectedItem
  },
}) => ({
  groceryList,
  isItemSelected,
  selectedItem
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addItem,
    removeItem,
    selectItem,
    deselectItem
  }, dispatch)
);

class ListContainer extends Component {
  UNSAFE_componentWillMount() {
    /* eslint-disable no-console */
    console.log('groceryList', this.props.groceryList, this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('groceryList', nextProps.groceryList, this);
  }

  render() {
    return (
      <section className="groceryApp">
        <div className="listInputs">
          <ListInputs addItem={this.props.addItem} />
        </div>
        <div className="types">
          <ListSelection
            isItemSelected={this.props.isItemSelected}
            selectedItem={this.props.selectedItem}
          />
          <ListTable
            groceryList={this.props.groceryList}
            removeItem={this.props.removeItem}
            selectItem={this.props.selectItem}
            isItemSelected={this.props.isItemSelected}
            selectedItem={this.props.selectedItem}
            deselectItem={this.props.deselectItem}
          />
        </div>
      </section>
    );
  }
}

ListContainer.propTypes = {
  // Props
  isItemSelected: PropTypes.bool.isRequired,
  selectedItem: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    deliveryMethod: PropTypes.string,
  }).isRequired,
  // Actions
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired,
  // Other
};

const ListContainerRedux = connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default ListContainerRedux;
