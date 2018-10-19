import 'jest';
import {Order} from './order';

test('it should log to console the invocation', () => {
    jest.spyOn(global.console, 'log').mockImplementation(() => undefined);
    const order = new Order();
    order.placeOrder('1234');
    expect(console.log).toBeCalledWith('call method placeOrder with args ["1234"]');
    expect(console.log).toBeCalledWith('Order no. \'1234\' is placed.');
});
