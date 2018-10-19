import 'jest';
import {Color, color2RGB, RGB, rgb2Color} from './color';

test('it should map color to rgb', () => {
    expect(color2RGB(Color.Blue)).toBe(RGB['#0000ff']);
});

test('it should map rgb to color', () => {
    expect(rgb2Color(RGB['#ff0000'])).toBe(Color.Red);
});
