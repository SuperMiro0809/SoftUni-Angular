function tickets(input, criteria) {
    var result = [];
    for (var i = 0; i < input.length; i++) {
        var _a = input[i].split('|'), name_1 = _a[0], price = _a[1], status_1 = _a[2];
        var obj = {
            destination: name_1,
            price: price,
            status: status_1
        };
        result.push(obj);
    }
    if (criteria === 'price') {
        return result.sort(function (a, b) { return Number(a.price) - Number(b.price); });
    }
    else {
        return result.sort(function (a, b) { return a[criteria].localeCompare(b[criteria]); });
    }
}
console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status'));
