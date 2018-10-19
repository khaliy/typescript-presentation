import 'jest';
import {MonthEnum, MonthName, MonthNumber} from './month';

test('enum should have static function', () => {
    expect(MonthEnum.between(MonthEnum.April, MonthEnum.January, MonthEnum.May)).toBeTruthy();
    expect(MonthEnum.between(MonthEnum.April, MonthEnum.April, MonthEnum.April)).toBeTruthy();
    expect(MonthEnum.between(MonthEnum.April, MonthEnum.May, MonthEnum.May)).toBeFalsy();
    expect(MonthEnum.between(MonthEnum.May, MonthEnum.August, MonthEnum.May)).toBeFalsy();
});

test('enum should be compatible with string and number literal types', () => {
    const jan: MonthName = 'January';
    expect(MonthEnum[jan]).toBe(MonthEnum.January);
    expect(MonthEnum.January).toBe(MonthEnum[jan]);

    const febr: MonthNumber = 2;
    expect(MonthEnum[febr]).toBe(MonthEnum[MonthEnum.February]);
    expect(MonthEnum[MonthEnum.February]).toBe(MonthEnum[febr]);
});
