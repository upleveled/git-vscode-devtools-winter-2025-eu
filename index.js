export const animals = [
  { id: 1, firstName: 'Lucia', type: 'Dog', accessory: 'House' },
  { id: 2, firstName: 'Macco', type: 'Fish', accessory: 'Car' },
  { id: 3, firstName: 'Jaspa', type: 'Elephant', accessory: 'Bike' },
  { id: 4, firstName: 'Jacco', type: 'Duck', accessory: 'Truck' },
  { id: 5, firstName: 'Malli', type: 'Cat', accessory: 'Lorry' },
];
function greet(name) {
  console.log(`Hello ${name}`);
}

greet();

export const response = await fetch(
  'https://jsonplaceholder.typicode.com/todos/1',
);
