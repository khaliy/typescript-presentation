import 'jest';
import {deleteTamperFn, maskTamperFn, Person, tamperProp} from './tamper-prop';

const people: Person[] = [{
    id: 1,
    name: 'admin',
    security: 'Im4dm1n'
}, {
    id: 2,
    name: 'low-user',
    security: 'canIhasCheezeBurger'
}];

test('it should remove security from people', () => {
    expect(people.map(tamperProp('security', deleteTamperFn))).toEqual([{
        id: 1,
        name: 'admin'
    }, {
        id: 2,
        name: 'low-user'
    }]);
});

test('it should mask security in people', () => {
    expect(people.map(tamperProp('security', maskTamperFn('***********')))).toEqual([{
        id: 1,
        name: 'admin',
        security: '***********'
    }, {
        id: 2,
        name: 'low-user',
        security: '***********'
    }]);
});
