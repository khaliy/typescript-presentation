import {log} from './logger';

export class Order {

    @log
    public placeOrder(transactionNumber: string) {
        console.log(`Order no. '${transactionNumber}' is placed.`);
    }
}
