import { createStore } from 'redux';
import { equal } from 'assert';
describe('store', () => {
    it('created with default value', () => {
        const store = createStore((state = 42) => state);
        equal(42, store.getState());
    });

    it('created with initial state', ()=>{
        const store = createStore(x => x,42);
        equal(42, store.getState());
    });

    it('dispatch', () => {
        const store = createStore((state = 42, action) => action.payload);
        store.dispatch({ type: '9587', payload: 9587 })
        equal(9587, store.getState())
    });

    it('subscribe', (done) => {
        const store = createStore((state,action) => {
            switch ( action.type ) {
                case 'FINISH':
                    done();
                    return state;
                default:
                    return state;
            }
        })
        store.dispatch({ type: 'FINISH' });
    })
});
