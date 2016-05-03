import { createStore } from 'redux';
import { ok } from 'assert';
import immutable from 'immutable';

const initState = { name:'world' };
const exactReducer = (state=immutable.fromJS(initState),action) => state;

describe('createStore',() => {
    it('should return somthing',() => {
        const store = createStore(exactReducer);
        ok(store.getState().get('name') === 'world');
    });
});
