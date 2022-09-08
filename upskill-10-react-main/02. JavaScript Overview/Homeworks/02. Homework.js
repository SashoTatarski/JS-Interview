const products = [
    {
        "id": 0,
        "name": "Product name 0",
        "quantity": 36,
        "price": "$53.29"
    },
    {
        "id": 1,
        "name": "Product name 1",
        "quantity": 32,
        "price": "$99.33"
    },
    {
        "id": 2,
        "name": "Product name 2",
        "quantity": 34,
        "price": "$86.83"
    },
    {
        "id": 3,
        "name": "Product name 3",
        "quantity": 25,
        "price": "$68.07"
    },
    {
        "id": 4,
        "name": "Product name 4",
        "quantity": 25,
        "price": "$74.79"
    }
];

const productsInDiscount = [
    {
        "id": 2,
        "name": "Product name 2",
        "quantity": 34,
        "price": "$86.83"
    },
    {
        "id": 3,
        "name": "Product name 3",
        "quantity": 25,
        "price": "$68.07"
    }
];

const source = new Set(products.map(({ id }) => id));
const target = new Set(productsInDiscount.map(({ id }) => id));

const difference = (source, target) => new Set(
    [...source].filter(element => !target.has(element))
);

console.log(difference(source, target));