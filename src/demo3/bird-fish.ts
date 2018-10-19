interface Bird {
    fly(): string;
    layEggs(): string;
}

interface Fish {
    swim(): string;
    layEggs(): string;
}

function getSmallPet(): Fish | Bird {
    if (Math.random() > 0.5) {
        return {
            layEggs: () => 'Laying Eggs',
            swim: () => 'Swimming'
        };
    } else {
        return {
            fly: () => 'Flying',
            layEggs: () => 'Laying Eggs',
        };
    }
}

const pet1 = getSmallPet();
if ((<Fish> pet1).swim) {
    (<Fish> pet1).swim();
} else {
    (<Bird> pet1).fly();
}

// type guard
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish> pet).swim !== undefined;
}

if (isFish(pet1)) {
    pet1.swim();
} else {
    pet1.fly();
}
