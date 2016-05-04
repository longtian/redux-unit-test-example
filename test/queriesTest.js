import queries from '../reducers/queries';
import { fromJS } from 'immutable';
import { equal } from 'assert';
import { createStore, combineReducers } from 'redux';

describe('queries', () => {
  it('works', ()=> {
    equal('A',
      queries(fromJS([{metric: 'A'}]), {})
        .get(0)
        .get('metric')
    )
  });

  describe('in store', () => {
    it('workd', () => {
      const store = createStore(queries, fromJS([{metric: 'A'}]));

      store.dispatch({
        type: 'SET_QUERIES',
        payload: [{metric: '1'}, {metric: '2'}]
      });

      equal(2, store.getState().size);

    });

    describe('when combined', () => {
      const store = createStore(
        combineReducers({
          queries
        })
      );

      // action cretors
      const addQuery = payload => ({
        type: 'ADD_QUERY',
        payload
      })

      store.dispatch(addQuery({
        metric: 'added'
      }));

      equal(1, store.getState().queries.size);
    })

  });
})