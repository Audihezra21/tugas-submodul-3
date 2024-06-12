const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.saveScreenshot('Before.png');
});

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.latesthead');
  I.see('Your Favorite Restaurant', '.latesthead');
  I.saveScreenshot('Showing_Empty_Liked_Restaurants.png');
});

// eslint-disable-next-line no-undef
Scenario('liking one restaurant', async ({ I }) => {
  I.see('Your Favorite Restaurant', '.latesthead', 5);
  I.saveScreenshot('Before_Liking_One_Restaurant.png');
  
  I.amOnPage('/', 5);
  I.saveScreenshot('Home_Page.png');
  
  I.seeElement('.info_title', 5);
  const firstRestaurant = locate('.info_title',5).first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.saveScreenshot('Restaurant_Details.png');

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.saveScreenshot('After_Liking_Restaurant.png');

  I.amOnPage('/#/favorite');
  I.seeElement('.info_title');
  const likedRestaurantName = await I.grabTextFrom('.info_title');
  I.saveScreenshot('Favorite_Page_After_Liking.png');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

// eslint-disable-next-line no-undef
Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.saveScreenshot('Before_Unliking_One_Restaurant.png');

  if (await I.grabNumberOfVisibleElements('.info_title') === 0) {
    I.amOnPage('/');
    I.saveScreenshot('Home_Page_No_Liked_Restaurant.png');
    I.seeElement('.info_title', 5);
    I.click(locate('.info_title').first());

    I.seeElement('#likeButton',5);
    I.click('#likeButton');
    I.saveScreenshot('After_Liking_Restaurant_For_Unlike.png');

    I.amOnPage('/#/favorite');
  }

  I.seeElement('.info_title',5);
  const firstRestaurant = locate('.info_title').first();
  I.click(firstRestaurant);
  I.saveScreenshot('Restaurant_Details_For_Unlike.png');

  I.seeElement('#likeButton', 5);
  I.click('#likeButton');
  I.saveScreenshot('After_Unliking_Restaurant.png');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.info_title');
  I.saveScreenshot('Favorite_Page_After_Unliking.png');
});

// eslint-disable-next-line no-undef
Scenario('adding a review to a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.saveScreenshot('Home_Page_For_Review.png');

  I.waitForElement('.info_title', 5); // Tunggu hingga elemen terlihat
  I.seeElement('.info_title');
  I.click(locate('.card').first());
  I.saveScreenshot('Restaurant_Details_For_Review.png');

  I.waitForElement('.form_review', 5); // Tunggu hingga elemen terlihat
  I.seeElement('.form_review');
  I.fillField('input[name="inputName"]', 'Audi');
  I.fillField('textarea[name="inputReview"]', 'Enak');
  I.saveScreenshot('Filled_Review_Form.png');
  I.click('button[type="submit"]');

  // Tambahkan langkah untuk menunggu dan memastikan ulasan diproses
  I.wait(3); // Tunggu beberapa detik untuk ulasan diproses
  I.saveScreenshot('After_Submitting_Review.png');

  I.refreshPage();
  I.saveScreenshot('After_Refreshing_Page.png');

  I.waitForElement('.review_item', 10); // Tunggu hingga elemen review terlihat
  const lastReview = locate('.review_item').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  I.saveScreenshot('Last_Review.png');

  console.log(`Last review text: ${lastReviewText}`); // Debugging

  // Periksa apakah ulasan terbaru mengandung nama dan teks ulasan yang diharapkan
  assert.strictEqual(lastReviewText.includes('Audi'), true, 'Nama reviewer tidak ditemukan pada ulasan terakhir');
  assert.strictEqual(lastReviewText.includes('Enak'), true, 'Isi ulasan tidak ditemukan pada ulasan terakhir');
});
