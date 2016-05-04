import { createAction } from 'redux-actions';
import { deepEqual } from 'assert';

describe('createAction', () => {
  it('should work', ()=> {
    const anything = createAction('ANYTHING');
    deepEqual(anything('2'), {
      type: 'ANYTHING',
      payload: '2'
    });
  });
});