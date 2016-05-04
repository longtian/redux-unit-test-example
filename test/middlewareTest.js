import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise';
import { equal } from 'assert';

describe('middleware', ()=> {
  it('when created', done => {

    const store = createStore((state = 42, action) => {
      if (action.type === 'A') {
        return action.payload;
      }
      return state;
    }, applyMiddleware(promiseMiddleware));

    store.subscribe(c=> {
      equal(43, store.getState());
      done();
    });

    const promise = new Promise((done, reject)=> {
      setTimeout(()=> {
        done(43);
      }, 100)
    });

    store.dispatch({
      type: 'A',
      payload: promise
    });

  })
})