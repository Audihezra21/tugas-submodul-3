// __tests__/likeRestaurant.test.js
const { likeRestaurant, unlikeRestaurant, isRestaurantLiked } = require('../src/script/utils/restaurantFunctions');

test('menyukai dan batal menyukai restoran', () => {
  const restaurantId = 1;

  // Menyukai restoran
  likeRestaurant(restaurantId);
  expect(isRestaurantLiked(restaurantId)).toBe(true);

  // Batal menyukai restoran
  unlikeRestaurant(restaurantId);
  expect(isRestaurantLiked(restaurantId)).toBe(false);
});
