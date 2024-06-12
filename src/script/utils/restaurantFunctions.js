// restaurantFunctions.js
const likedRestaurants = new Set();

function likeRestaurant(id) {
  likedRestaurants.add(id);
}

function unlikeRestaurant(id) {
  likedRestaurants.delete(id);
}

function isRestaurantLiked(id) {
  return likedRestaurants.has(id);
}

module.exports = { likeRestaurant, unlikeRestaurant, isRestaurantLiked };
