import 'jest';
import {histogram} from './callback';

test('it should collect character occurrences', () => {
    histogram('Some text with characters', (h) => {
        expect(h).toEqual({
            ' ': 3, 'S': 1, 'a': 2, 'c': 2, 'e': 3, 'h': 2, 'i': 1,
            'm': 1, 'o': 1, 'r': 2, 's': 1, 't': 4, 'w': 1, 'x': 1});
    });
});
