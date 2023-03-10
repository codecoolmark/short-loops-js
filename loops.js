export function filterLongNames(names) {
    const longNames = [];

    for (const name of names) {
        if (name.length > 8) {
            longNames.push(name);
        }
    }

    return longNames;
}

export function inventoryItemNames(items) {
    const names = [];

    for (const item of items) {
        names.push(item.name);
    }

    return names;
}

export function orderItemNames(inventory, orderItemIds) {
    const orderedItems = [];

    for (const itemId of orderItemIds) {
        if (inventory[itemId].amount > 0) {
            orderedItems.push(inventory[itemId].name);
        }
    }

    return orderedItems;
}
