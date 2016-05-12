import { throws, doesNotThrow, deepEqual } from 'assert';

describe('Object', () => {

  it('can be sealed', () => {
    const obj = {};


    doesNotThrow(() => {
      obj.a = 'a';
    },'before sealed');

    Object.seal(obj);

    throws(() => {
      obj.b = 'b'
    },'Object is sealed, not for extension');

    deepEqual({
      a:'a'
    },obj);

  });
  it('can be freezed', () => {
    const a = {
      name: 'world'
    };

    Object.freeze(a);

    throws(() => {
      a.name = 'haha';
    }), 'if an object is freezed, the property can not be written' +
    'anymore';

  });


});