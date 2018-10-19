export interface Item {
    name: string;
    type: 'physical' | 'digital';
    price: Price;
}

const currencyRatio: {[p in Currency]: {[r in Currency]: number}} = {
    HUF: {
        HUF: 1.0,
        USD: 1.0 / 323.0
    },
    USD: {
        HUF: 323.0,
        USD: 1.0
    }
};

type Currency = 'HUF' | 'USD';
export interface Price {
    value: number;
    currency: Currency;
    includeVat: boolean;
}

type ReadonlyDeep<T> = {
    readonly [P in keyof T]: ReadonlyDeep<T[P]>;
};
export interface CartService {
    addItem(item: Item): void;
    listItems(): ReadonlyDeep<Item[]>;
    total(currency: Currency): Price;
    empty(): void;
}

export class CartServiceImpl implements CartService {

    private static convert(item: Item, currency: Currency): Item {
        return {
            name: item.name,
            price: {
                currency,
                includeVat: item.price.includeVat,
                value: currencyRatio[item.price.currency][currency] * item.price.value
            },
            type: item.type
        };
    }

    private items: Item[] = [];

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public listItems(): Readonly<Item[]> {
        return this.items;
    }

    public total(currency: Currency): Price {
        return this.items.reduce( (price: Price, item: Item) => {
            price.value += CartServiceImpl.convert(item, currency).price.value;
            return price;
        }, {
            currency,
            includeVat: true,
            value: 0
        } as Price);
    }

    public empty() {
        this.items = [];
    }
}
