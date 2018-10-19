import 'jest';
import {mulText} from './mul-text';

test('it should repeat text n times', () => {
    expect(mulText('na ', 10) + 'Batman').toBe('na na na na na na na na na na Batman');
});
