export const products = [
  {
    id: 1,
    name: 'Yogurt',
    imgUri:
      'https://media.istockphoto.com/photos/healthy-breakfast-fresh-granola-muesli-with-yogurt-and-berries-on-picture-id1126941318?k=6&m=1126941318&s=612x612&w=0&h=cp7pXhElOsOJrDORYvfsMFHgiGesbzlYZcV_hAF6BsM=',
    price: 16000,
  },
  {
    id: 2,
    name: 'Roti Kering',
    imgUri:
      'https://media.istockphoto.com/photos/sliced-bread-isolated-on-a-white-background-bread-slices-and-crumbs-picture-id957824528?k=6&m=957824528&s=612x612&w=0&h=gOTBpgHqhZVev9UYGOR6wgAu7NRUeTFZ47xRnn1HGC0=',
    price: 10000,
  },
  {
    id: 3,
    name: 'Soup',
    imgUri:
      'https://media.istockphoto.com/photos/hot-homemade-corn-chowder-picture-id494154858?k=6&m=494154858&s=612x612&w=0&h=TnanjPpHBJuMK4cm8tkfrhU8PUyeS5ckH6CEgy6XJuI=',
    price: 8000,
  },
  {
    id: 4,
    name: 'Sandwich',
    imgUri:
      'https://media.istockphoto.com/photos/healthy-grilled-basil-mozzarella-caprese-panini-picture-id930271208?k=6&m=930271208&s=612x612&w=0&h=2kpo76tA14UTqWv0eJG9RhEtyYAa13WqQ7yvLbPTGJw=',
    price: 12000,
  },
  {
    id: 5,
    name: 'Salad',
    imgUri:
      'https://media.istockphoto.com/photos/various-fresh-mix-salad-leaves-with-tomato-in-bowl-on-wooden-picture-id1075446340?k=6&m=1075446340&s=612x612&w=0&h=HTnAZvcwYrzlcr4WtE31Bj4bRgSF8oNjG6afI9DbfLk=',
    price: 12000,
  },
  {
    id: 6,
    name: 'Pizza',
    imgUri:
      'https://media.istockphoto.com/photos/pepperoni-pizza-composition-picture-id1054829738?k=6&m=1054829738&s=612x612&w=0&h=nhvEKxzegohOcqvl8hFfpPwfBtT0taRgTaCnHhbX-6k=',
    price: 36000,
  },
  {
    id: 7,
    name: 'Burger',
    imgUri:
      'https://media.istockphoto.com/photos/fresh-tasty-burger-on-dark-background-picture-id946651794?k=6&m=946651794&s=612x612&w=0&h=N_9_PnSw-BwRyRxu9WLjTEa0RUIL-eel0ewmEnaKCFw=',
    price: 26000,
  },
  {
    id: 8,
    name: 'Jagung Bakar',
    imgUri:
      'https://media.istockphoto.com/photos/grilled-corn-cobs-on-rustic-table-picture-id477586846?k=6&m=477586846&s=612x612&w=0&h=C_e_Y4fN3LnaQcZwHPQu5_Bt0J6BY9KNFiqz6I1Ax9U=',
    price: 6000,
  },
  {
    id: 9,
    name: 'Sushi',
    imgUri:
      'https://media.istockphoto.com/photos/sushi-picture-id135849804?k=6&m=135849804&s=612x612&w=0&h=9YAmSNQNJ_7Tf0v4YgB6cw8dWjazMKi3Wb9tGR0I3hU=',
    price: 10000,
  },
  {
    id: 10,
    name: 'Mie Goreng',
    imgUri:
      'https://media.istockphoto.com/photos/fried-noodles-with-chicken-directly-above-picture-id1206076029?k=6&m=1206076029&s=612x612&w=0&h=OHhx9BrYQBA7c6Ov-hPsyiP5Ku9gLscb185GuyY2tqg=',
    price: 8000,
  },
];

export const productAdded = products.filter((product) => {
  return product.id === products.id;
});
