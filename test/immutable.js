import { createStore } from 'redux';
import { ok, equal } from 'assert';
import Immtable from 'immutable';

const initState = {name: 'world'};
const exactReducer = (state = Immtable.fromJS(initState), action) => state;

describe('createStore', () => {
  it('should return somthing', () => {
    const store = createStore(exactReducer);
    ok(store.getState().get('name') === 'world');
  });
});


describe('Immtable api', () => {

  it('fromJS',() => {
    const obj = {
      name: 'hello',
      world: [1,2,3,{
        name:'4'
      }]
    }
    equal('hello',Immtable.fromJS(obj).get('name'));
  });

  it('hashCode',() => {
    const objA ={
      name: 'a'
    };

    const objB = {
      name: 'a'
    };

    ok(
      Immtable.fromJS(objA).hashCode() === Immtable.fromJS(objB).hashCode(),
      'If two immutable objects have the same hashCode, it is the same "object" '
    );

  })

  it('valueOf', () => {
    const a = {
      name: 'world'
    };
    const $$object = Immtable.fromJS(a);
    const $$object2 = $$object.set('name', 'world');
    const $$object3 = $$object.set('name', 'world2');

    ok($$object2 === $$object, 'identical')
    ok($$object2.hashCode() === $$object.hashCode(), 'identical')


  })

});