import rootReducer from './reducers';
import { initialState } from './ducks/groceries';

describe('groceries reducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({groceries: initialState});
  });
});
