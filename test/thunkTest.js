import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

describe('thunk', () => {
  it('when defined', (done) => {
    const store = createStore((state = 42, action)=> {
      switch (action.type) {
        case 'DELAYED':
          // aysc done
          done();
          return action.payload;
        default:
          return state;
      }
    }, applyMiddleware(thunkMiddleware));

    store.dispatch((dispatch, getState)=> {
      setTimeout(()=> {
        dispatch({
          type: 'DELAYED',
          payload: 43
        });
      }, 100);
    })
  });
});
