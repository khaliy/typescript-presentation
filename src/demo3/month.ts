export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type MonthName = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' |
    'July' | 'August' | 'September' | 'October' | 'November' | 'December';

export enum MonthEnum {
    'January' = 1,
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
}

// static function for enums
export namespace MonthEnum {
    export function between(what: MonthEnum, from: MonthEnum, to: MonthEnum): boolean {
        return what >= from && what <= to;
    }
}
