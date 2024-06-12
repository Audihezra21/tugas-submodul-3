import RestaurantSource from '../data/restaurant-source';
import cardReview from '../components/review';

const addReview = async ({ url, name, review }) => {
  const userInputData = {
    id: url,
    name,
    review,
  };

  try {
    // Tambahkan review ke server
    const restaurant = await RestaurantSource.addReviewRestaurant(userInputData);

    // Cek apakah review berhasil ditambahkan
    if (restaurant.customerReviews) {
      // Buat tampilan baru untuk review yang baru ditambahkan
      const newReview = cardReview(restaurant.customerReviews[restaurant.customerReviews.length - 1]);

      // Cari container untuk menampilkan review
      const reviewContainer = document.querySelector('.card-review');

      // Tambahkan review baru ke dalam container
      reviewContainer.innerHTML += newReview;
    } else {
      // Jika review tidak berhasil ditambahkan, tampilkan pesan error atau lakukan penanganan yang sesuai
      console.error('Failed to add review');
    }
  } catch (error) {
    // Tangani error jika terjadi kesalahan saat menambahkan review
    console.error('Error adding review:', error);
  }
};

export default addReview;
