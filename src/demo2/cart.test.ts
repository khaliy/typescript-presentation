import 'jest';
import {CartService, CartServiceImpl} from './cart';

const cart: CartService = new CartServiceImpl();

test('it should add two number', () => {
    expect(cart.listItems().length).toBe(0);
});

test('should calculate total', () => {
    cart.empty();
    cart.addItem({
        name: 'Typescript book',
        price: {
            currency: 'USD',
            includeVat: true,
            value: 100
        },
        type: 'physical'
    });
    cart.addItem({
        name: 'Typescript book',
        price: {
            currency: 'HUF',
            includeVat: true,
            value: 3230
        },
        type: 'physical'
    });
    expect(cart.total('USD').value).toBe(110.0);
});

test('should not modify items when listed', () => {
    // cart.listItems()[0].price.value = 12;
});
