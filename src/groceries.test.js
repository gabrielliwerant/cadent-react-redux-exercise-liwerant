import rootReducer from './reducers';
import { initialState, ADD_ITEM, REMOVE_ITEM } from './ducks/groceries';

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
});
