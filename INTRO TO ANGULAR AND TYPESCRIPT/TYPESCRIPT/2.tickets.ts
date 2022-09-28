function tickets(input:string[], criteria:string) {

    let result = [];

    for(let i = 0; i < input.length; i++) {
        let [name, price, status] = input[i].split('|');

        let obj:object = {
            destination: name,
            price: price,
            status: status
        };

        result.push(obj);
    }

    if(criteria === 'price') {
        return result.sort((a, b) => Number(a.price) - Number(b.price));
    }else {
        return result.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }
}

console.log(tickets(
    [
        'Philadelphia|94.20|available',
         'New York City|95.99|available',
         'New York City|95.99|sold',
         'Boston|126.20|departed'
        ],
        'status'
        
        
))