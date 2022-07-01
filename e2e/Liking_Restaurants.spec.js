/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#content-null');
});
Scenario('liking one restaurant', async ({ I }) => {
  I.seeElement('#content-null');
  I.amOnPage('#/');

  I.seeElement('.post-item-title a');

  const firstRestaurant = locate('.post-item-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post_item');
  const likedRestaurantTitle = await I.grabTextFrom('.post-item-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('#/');
  I.seeElement('.post-item-title a');

  I.click(locate('.post-item-title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');

  I.seeElement('.post-item-title a');

  const firstLikedRestaurant = locate('.post-item-title a').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  I.seeElement('.restaurant__title');
  const RestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstLikedRestaurantTitle, RestaurantTitle);

  I.seeElement('.liked');
  I.click('.liked');

  I.amOnPage('/#/favorite');
  I.seeElement('#content-null');

  I.seeElement('.movie-item-not-found');
  I.see('No restaurant list here', '.movie-item-not-found');
});
