import 'jest';
import {coursePassed} from './course-passed';

test('it should tell that course is passed', () => {
    expect(coursePassed(81)).resolves.toBeTruthy();
});

test('it should also tell that course is not passed', () => {
    expect(coursePassed(74)).resolves.toBeFalsy();
});

test('it should also reject if score is out of bounds', () => {
    expect(coursePassed(-10)).rejects.toEqual('Invalid score has been provided: \'-10\'.');
});
