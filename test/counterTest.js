import { createStore } from 'redux';
import counter from '../reducers/counter';
import { ok, equal } from 'assert';

describe('counter_purefunction',() => {

    it('incr',()=>{
        equal(1, counter(0, { type: 'INC'}));
    });

    it('others',()=>{
        equal(0, counter(0, {}));
    });

});