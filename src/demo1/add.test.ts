import 'jest';
import {add} from './add';

test('it should add two number', () => {
    expect(add(1, 2)).toBe(3);
});
