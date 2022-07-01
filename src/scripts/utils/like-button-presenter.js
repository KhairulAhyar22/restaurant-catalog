/* eslint-disable no-underscore-dangle */
import { createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this.LikeButtonContainer = likeButtonContainer;
    this.Restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.Restaurant;

    if (await this.isMovieExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isMovieExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    this.LikeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this.Restaurant);
      this.renderButton();
    });
  },

  renderLiked() {
    this.LikeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this.Restaurant.id);
      this.renderButton();
    });
  },
};

export default LikeButtonPresenter;
