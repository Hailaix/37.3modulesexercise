function choice(items){
    const rnd = Math.floor(Math.random() * items.length);
    return items[rnd];
}

function remove(items, item) {
    const itemidx = items.indexOf(item);
    if(itemidx !== -1){
        const removed = items.splice(itemidx, 1);
        return removed[0];
    }

}

export {choice, remove};