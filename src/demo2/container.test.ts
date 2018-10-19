import 'jest';
import {Container} from './container';

const container: Container<string> = new Container(['one', 'two', 'three']);

test('it should contain the items', () => {
    expect(container.length).toBe(3);
    expect(container.get(2)).toBe('three');
    container.set(2, 'other');
    expect(container.get(2)).toBe('other');
});

test('it should contain items with literal types', () => {
    type ThreeNumbersAsString = 'one' | 'two' | 'three';
    const container2: Container<ThreeNumbersAsString> =
        new Container(['one', 'two', 'three'] as ThreeNumbersAsString[]);

    expect(container2.length).toBe(3);
    expect(container2.get(2)).toBe('three');
     // container2.set(2, 'other');
    // expect(container2.get(2)).toBe('other');
});
