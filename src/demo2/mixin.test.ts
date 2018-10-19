import 'jest';
import {SmartObject} from './mixin';

test('it should be activatable', () => {
    const smartObject = new SmartObject();
    expect(smartObject.interact()).toBeTruthy();
});

test('it should be disposable', () => {
    const smartObject = new SmartObject();
    expect(smartObject.isDisposed).toBeFalsy();
    smartObject.dispose();
    expect(smartObject.isDisposed).toBeTruthy();
});
