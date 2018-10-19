import 'jest';
import {logLength} from './generics';

test('it should log length of array to console', () => {
    jest.spyOn(global.console, 'log').mockImplementation(() => undefined);
    logLength([1, 2, 3, 4, 5, 6]);
    expect(console.log).toBeCalledWith(6);
});
