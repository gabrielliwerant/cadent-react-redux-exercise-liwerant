import rootReducer from '../reducers';
import { initialState, ADD_ITEM, REMOVE_ITEM, SELECT_ITEM, DESELECT_ITEM } from '../ducks/groceries';

describe('groceries reducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({groceries: initialState});
  });

  it('should add grocery list item', () => {
    const startingState = {
      groceries: {
        list: [
          {
            id: 66,
            name: 'Bananas',
            category: 'Fruit',
            deliveryMethod: 'Air',
          }
        ]
      }
    };
    const item = {
      id: 10,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
    };
    const expectedState = {
      groceries: {
        list: [
          {
            id: 66,
            name: 'Bananas',
            category: 'Fruit',
            deliveryMethod: 'Air',
          },
          item
        ]
      }
    };

    expect(
      rootReducer(startingState, {
        type: ADD_ITEM,
        payload: item
      })
    ).toEqual(expectedState);
  });

  it('should remove grocery list item', () => {
    const startingState = {
      groceries: {
        list: [
          {
            id: 66,
            name: 'Bananas',
            category: 'Fruit',
            deliveryMethod: 'Air',
          },
          {
            id: 16,
            name: 'Whole Grain Bread',
            category: 'Grains',
            deliveryMethod: 'Air',
          }
        ]
      }
    };
    const expectedState = {
      groceries: {
        list: [
          {
            id: 16,
            name: 'Whole Grain Bread',
            category: 'Grains',
            deliveryMethod: 'Air',
          }
        ]
      }
    };

    expect(
      rootReducer(startingState, {
        type: REMOVE_ITEM,
        payload: 66
      })
    ).toEqual(expectedState);
  });

  it('should select grocery list item when none have been selected yet', () => {
    const startingState = {
      groceries: {
        list: [
          {
            id: 66,
            name: 'Bananas',
            category: 'Fruit',
            deliveryMethod: 'Air',
          },
          {
            id: 16,
            name: 'Whole Grain Bread',
            category: 'Grains',
            deliveryMethod: 'Air',
          }
        ],
        isItemSelected: false,
        selectedItem: {
          id: 0,
          name: '',
          category: '',
          deliveryMethod: '',
        },
      }
    };
    const expectedState = {
      groceries: {
        list: [
          {
            id: 66,
            name: 'Bananas',
            category: 'Fruit',
            deliveryMethod: 'Air',
          },
          {
            id: 16,
            name: 'Whole Grain Bread',
            category: 'Grains',
            deliveryMethod: 'Air',
          }
        ],
        isItemSelected: true,
        selectedItem: {
          id: 66,
          name: 'Bananas',
          category: 'Fruit',
          deliveryMethod: 'Air',
        },
      }
    };

    expect(
      rootReducer(startingState, {
        type: SELECT_ITEM,
        payload: 66
      })
    ).toEqual(expectedState);
  });

  it('should select new grocery list item when selecting a different one from that which is already selected', () => {
    const startingState = {
      groceries: {
        list: [
          {
            id: 66,
            name: 'Bananas',
            category: 'Fruit',
            deliveryMethod: 'Air',
          },
          {
            id: 16,
            name: 'Whole Grain Bread',
            category: 'Grains',
            deliveryMethod: 'Air',
          }
        ],
        isItemSelected: true,
        selectedItem: {
          id: 66,
          name: 'Bananas',
          category: 'Fruit',
          deliveryMethod: 'Air',
        },
      }
    };
    const expectedState = {
      groceries: {
        list: [
          {
            id: 66,
            name: 'Bananas',
            category: 'Fruit',
            deliveryMethod: 'Air',
          },
          {
            id: 16,
            name: 'Whole Grain Bread',
            category: 'Grains',
            deliveryMethod: 'Air',
          }
        ],
        isItemSelected: true,
        selectedItem: {
          id: 16,
          name: 'Whole Grain Bread',
          category: 'Grains',
          deliveryMethod: 'Air',
        },
      }
    };

    expect(
      rootReducer(startingState, {
        type: SELECT_ITEM,
        payload: 16
      })
    ).toEqual(expectedState);
  });

  it('should deselect grocery list item', () => {
    const startingState = {
      groceries: {
        list: [
          {
            id: 66,
            name: 'Bananas',
            category: 'Fruit',
            deliveryMethod: 'Air',
          },
          {
            id: 16,
            name: 'Whole Grain Bread',
            category: 'Grains',
            deliveryMethod: 'Air',
          }
        ],
        isItemSelected: true,
        selectedItem: {
          id: 66,
          name: 'Bananas',
          category: 'Fruit',
          deliveryMethod: 'Air',
        },
      }
    };
    const expectedState = {
      groceries: {
        list: [
          {
            id: 66,
            name: 'Bananas',
            category: 'Fruit',
            deliveryMethod: 'Air',
          },
          {
            id: 16,
            name: 'Whole Grain Bread',
            category: 'Grains',
            deliveryMethod: 'Air',
          }
        ],
        isItemSelected: false,
        selectedItem: {
          id: 0,
          name: '',
          category: '',
          deliveryMethod: '',
        },
      }
    };

    expect(
      rootReducer(startingState, {
        type: DESELECT_ITEM,
        payload: 66
      })
    ).toEqual(expectedState);
  });
});
